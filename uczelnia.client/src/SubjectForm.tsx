import React from 'react';

export const SubjectForm = ({ subject, setSubject, saveSubject, cancelEdit }) => {
    return (
        <div>
            <input
                type="text"
                placeholder="New product"
                value={subject.name}
                onChange={(e) => setSubject({ ...subject, name: e.target.value })} />
            <label>
                <input
                    type="checkbox"
                    checked={subject.inStock}
                    onChange={(e) => setSubject({ ...subject, inStock: e.target.checked })} />
                In stock
            </label>
            <button onClick={saveSubject}>Save</button>
            {cancelEdit && <button onClick={cancelEdit}>Cancel</button>}
        </div>
    );
};
