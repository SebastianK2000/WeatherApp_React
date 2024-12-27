# WeatherApp_React

https://github.com/user-attachments/assets/2c388d42-956d-49c7-a644-47706890ebb2

![Zrzut ekranu 2024-12-27 213353](https://github.com/user-attachments/assets/dfb776b1-a838-4e82-896e-10535cbc8ce2)
![Zrzut ekranu 2024-12-27 213403](https://github.com/user-attachments/assets/aa1b8da4-5327-411d-9b8b-7a3fa3dce3ad)


WeatherApp_React
Opis projektu
WeatherApp_React to aplikacja pogodowa stworzona przy użyciu React.js. Umożliwia użytkownikom sprawdzanie aktualnych warunków pogodowych oraz prognoz dla wybranych lokalizacji.
Funkcjonalności
Wyświetlanie aktualnej pogody dla wybranego miasta
Prognoza pogody na kolejne dni
Wyszukiwanie lokalizacji
Responsywny interfejs użytkownika
Technologie
React.js
JavaScript (ES6+)
HTML5
CSS3
API pogodowe (np. OpenWeatherMap)
Instalacja
Aby uruchomić projekt lokalnie, wykonaj następujące kroki:
Sklonuj repozytorium:
bash
git clone https://github.com/SebastianK2000/WeatherApp_React.git
Przejdź do katalogu projektu:
bash
cd WeatherApp_React
Zainstaluj zależności:
bash
npm install
Uruchom aplikację w trybie deweloperskim:
bash
npm start
Aplikacja powinna być dostępna pod adresem http://localhost:3000.
Konfiguracja
Utwórz plik .env w głównym katalogu projektu.
Dodaj swój klucz API do serwisu pogodowego:
text
REACT_APP_WEATHER_API_KEY=twój_klucz_api
Struktura projektu
text
WeatherApp_React/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── WeatherDisplay.js
│   │   ├── SearchBar.js
│   │   └── ...
│   ├── services/
│   │   └── weatherApi.js
│   ├── styles/
│   │   └── main.css
│   ├── App.js
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
Użycie
Po uruchomieniu aplikacji:
Wpisz nazwę miasta w polu wyszukiwania.
Naciśnij przycisk "Szukaj" lub wciśnij Enter.
Przeglądaj wyświetlone informacje o pogodzie.
Wkład w projekt
Jeśli chcesz przyczynić się do rozwoju projektu:
Utwórz fork repozytorium.
Stwórz nową gałąź (git checkout -b feature/AmazingFeature).
Zatwierdź zmiany (git commit -m 'Add some AmazingFeature').
Wypchnij do gałęzi (git push origin feature/AmazingFeature).
Otwórz Pull Request.
Licencja
Projekt jest udostępniany na licencji MIT. Szczegóły znajdziesz w pliku LICENSE.
Kontakt
Sebastian Kościółek - sebastian.kosciolek@example.com
Link do projektu: https://github.com/SebastianK2000/WeatherApp_React
