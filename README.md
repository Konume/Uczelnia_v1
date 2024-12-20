# Uczelnia_v1

## Opis

Projekt "Uczelnia_v1" to aplikacja do zarządzania procesami akademickimi. Zapewnia podstawowe funkcjonalności umożliwiające zarządzanie danymi studentów, wykładowców, przedmiotów i ocen. Projekt może być wykorzystany w celach edukacyjnych lub jako baza do rozbudowy bardziej zaawansowanego systemu.

## Funkcjonalności

- Dodawanie i zarządzanie danymi studentów, wykładowców oraz przedmiotów.
- Rejestrowanie ocen studentów.
- Wyświetlanie listy przedmiotów oraz wyników egzaminów.

## Wymagania

- Java 11+
- Maven (do zarządzania zależnościami)
- Relacyjna baza danych (np. MySQL, PostgreSQL, H2)
- Opcjonalnie środowisko IDE (np. IntelliJ IDEA, Eclipse)

## Instalacja

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/Konume/Uczelnia_v1.git
   cd Uczelnia_v1
   ```

2. Skonfiguruj bazę danych:
   - Utwórz bazę danych o nazwie `uczelnia_v1`.
   - Wprowadź odpowiednie dane dostępowe w pliku `application.properties`.

3. Zbuduj projekt za pomocą Mavena:
   ```bash
   mvn clean install
   ```

4. Uruchom aplikację:
   ```bash
   mvn spring-boot:run
   ```

## Użycie

1. Otwórz aplikację w przeglądarce pod adresem [http://localhost:8080](http://localhost:8080).
2. Użyj interfejsu użytkownika do dodawania i przeglądania danych studentów, wykładowców i przedmiotów.

## Dokumentacja

Szczegółowe informacje o projekcie znajdują się w katalogu `docs` w repozytorium. Zawiera on m.in. diagramy UML i przykłady użycia.

## Wkład

Zapraszamy do zgłaszania błędów, sugestii oraz propozycji ulepszeń za pomocą systemu zgłoszeń (Issues). Pull requesty są mile widziane!

## Licencja

Projekt "Uczelnia_v1" jest licencjonowany na warunkach licencji MIT. Szczegóły znajdują się w pliku [LICENSE](LICENSE).

---

Dziękujemy za zainteresowanie projektem i zapraszamy do jego rozwijania!
