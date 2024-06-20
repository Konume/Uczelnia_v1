import React from 'react';

export const SubjectItem = ({ subject, onDelete, onEdit, onUpdate }) => {
    const handleCheckboxChange = () => {
        const updatedSubject = { ...subject, inStock: !subject.inStock };
        onUpdate(updatedSubject);
    };

    const itemStyle = {
        color: subject.inStock ? 'white' : 'gray', // Czarny kolor tekstu dla inStock true, szary dla false
    };

    return (
        <li style={itemStyle}>
            {subject.id}. {subject.name}
            <input
                type="checkbox"
                checked={subject.inStock}
                onChange={handleCheckboxChange} />
            In Stock
            <button className="delete-btn" onClick={() => onDelete(subject.id)}>Delete</button>
            <button className="edit-btn" onClick={() => onEdit(subject)}>Edit</button>
        </li>
    );
};
