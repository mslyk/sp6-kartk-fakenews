export const questions = [
  {
    "id": 1,
    "type": "single",
    "question": "W grupie klasowej pojawia się wiadomość: „Od poniedziałku lekcje zaczynają się o 10:00”. Nie ma podpisu ani linku. Co jest najlepszą pierwszą reakcją?",
    "options": [
      "Przekazać wiadomość dalej, żeby ostrzec innych",
      "Sprawdzić komunikaty szkoły lub zapytać wychowawcę",
      "Uznać ją za prawdziwą, bo jest na grupie klasowej",
      "Napisać, że to na pewno oszustwo"
    ],
    "correct": 1,
    "points": 2
  },
  {
    "id": 2,
    "type": "identify",
    "question": "Przeczytaj wymyślony wpis. Zaznacz WSZYSTKIE fragmenty, które powinny wzbudzić ostrożność.",
    "intro": "„PILNE! Od jutra szkoły w całym kraju są zamknięte. Informację potwierdził ktoś z urzędu. Udostępnij wszystkim NATYCHMIAST! Więcej szczegółów wkrótce.”",
    "parts": [
      "PILNE!",
      "Od jutra szkoły w całym kraju są zamknięte.",
      "Informację potwierdził ktoś z urzędu.",
      "Udostępnij wszystkim NATYCHMIAST!",
      "Więcej szczegółów wkrótce."
    ],
    "correct": [
      0,
      2,
      3
    ],
    "points": 3,
    "note": "Samo twierdzenie o zamknięciu szkół wymaga weryfikacji, ale w tym zadaniu zaznaczamy cechy ostrzegawcze tekstu."
  },
  {
    "id": 3,
    "type": "match",
    "question": "Dopasuj rodzaj informacji do najlepszego źródła, od którego warto zacząć sprawdzanie.",
    "left": [
      "Termin egzaminu ósmoklasisty",
      "Zmiana godzin pracy szkolnej biblioteki",
      "Ostrzeżenie meteorologiczne dla regionu",
      "Wysokość opłaty za paszport"
    ],
    "right": [
      "Komunikat szkoły",
      "Strona Centralnej Komisji Egzaminacyjnej",
      "Serwis IMGW",
      "Oficjalna strona urzędu lub gov.pl"
    ],
    "correct": [
      1,
      0,
      2,
      3
    ],
    "points": 4
  },
  {
    "id": 4,
    "type": "order",
    "question": "Uporządkuj działania od najrozsądniejszego pierwszego kroku do ostatniego. Dostajesz sensacyjną wiadomość od znajomego.",
    "items": [
      "Sprawdzam autora, datę i źródło wpisu.",
      "Porównuję twierdzenie z wiarygodnymi, niezależnymi źródłami.",
      "Czytam pełną treść, nie tylko nagłówek.",
      "Dopiero potem podejmuję decyzję, czy przekazać informację dalej."
    ],
    "correct": [
      2,
      0,
      1,
      3
    ],
    "points": 4
  },
  {
    "id": 5,
    "type": "classify",
    "question": "Przyporządkuj każdy przykład: „bardziej wiarygodne” albo „wymaga ostrożności”. Nie zakładaj, że wiarygodne źródło jest nieomylne.",
    "items": [
      "Aktualny komunikat na oficjalnej stronie szkoły o godzinach zajęć",
      "Anonimowy film: „Lekarze ukrywają prawdę!”, bez podanych badań",
      "Artykuł z nazwiskiem autora, datą i linkami do źródeł",
      "Łańcuszek z prośbą o natychmiastowe udostępnianie"
    ],
    "categories": [
      "Bardziej wiarygodne",
      "Wymaga ostrożności"
    ],
    "correct": [
      0,
      1,
      0,
      1
    ],
    "points": 4
  },
  {
    "id": 6,
    "type": "short",
    "question": "Podaj termin oznaczający fałszywą lub wprowadzającą w błąd wiadomość, często rozpowszechnianą w internecie. Wpisz dwuwyrazową nazwę po angielsku.",
    "correct": [
      "fake news",
      "fake-news",
      "fake newsy"
    ],
    "display": "fake news",
    "points": 2
  },
  {
    "id": 7,
    "type": "multi",
    "question": "Dwa portale publikują tę samą historię i oba powołują się na anonimowy post. Zaznacz WSZYSTKIE uzasadnione wnioski.",
    "options": [
      "Nie są to dwa niezależne potwierdzenia",
      "Należy poszukać pierwotnego źródła i dowodów",
      "Historia jest na pewno fałszywa",
      "Sama liczba portali nie rozstrzyga o prawdziwości"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "points": 3
  },
  {
    "id": 8,
    "type": "fill",
    "question": "Uzupełnij trzy luki tak, aby powstał sensowny sposób oceny wiadomości.",
    "segments": [
      "Najpierw sprawdzam, kto jest ",
      " tekstu. Następnie patrzę na ",
      " publikacji. Jeśli wiadomość jest ważna, porównuję ją z ",
      " źródłem."
    ],
    "choices": [
      [
        "autorem",
        "odbiorcą",
        "bohaterem"
      ],
      [
        "datę",
        "kolor tła",
        "liczbę emotikonów"
      ],
      [
        "niezależnym",
        "najgłośniejszym",
        "anonimowym"
      ]
    ],
    "correct": [
      0,
      0,
      0
    ],
    "points": 3
  },
  {
    "id": 9,
    "type": "tfgrid",
    "question": "Oceń każde zdanie jako prawda lub fałsz.",
    "items": [
      "Zdjęcie może być prawdziwe, ale pochodzić z innego wydarzenia.",
      "Jeśli autor jest podpisany, nie trzeba już sprawdzać dowodów.",
      "Informacja sprzed kilku lat może być dziś nieaktualna.",
      "Pierwszy wynik wyszukiwania zawsze jest najbardziej rzetelny."
    ],
    "correct": [
      1,
      0,
      1,
      0
    ],
    "points": 4
  },
  {
    "id": 10,
    "type": "single",
    "question": "W artykule pada zdanie: „Badania dowodzą, że nauka podczas snu gwarantuje szóstki”. Jaki szczegół byłby NAJBARDZIEJ przydatny do sprawdzenia tej tezy?",
    "options": [
      "Nazwisko influencera, który udostępnił wpis",
      "Link do konkretnego badania i jego wyników",
      "Liczba reakcji pod postem",
      "Kolor i rozmiar wykresu"
    ],
    "correct": 1,
    "points": 2
  },
  {
    "id": 11,
    "type": "classify",
    "question": "Zdecyduj, czy poniższy opis dotyczy FAKTU możliwego do sprawdzenia, czy OPINII.",
    "items": [
      "„Biblioteka szkolna jest otwarta w piątki do 15:00”.",
      "„Ta biblioteka jest najładniejsza w mieście”.",
      "„Artykuł opublikowano 2 listopada”.",
      "„To najciekawszy artykuł miesiąca”."
    ],
    "categories": [
      "Fakt do sprawdzenia",
      "Opinia"
    ],
    "correct": [
      0,
      1,
      0,
      1
    ],
    "points": 4
  },
  {
    "id": 12,
    "type": "short",
    "question": "Jak nazywa się osoba, która napisała artykuł lub wiadomość? Wpisz jedno słowo.",
    "correct": [
      "autor",
      "autorka"
    ],
    "display": "autor / autorka",
    "points": 2
  },
  {
    "id": 13,
    "type": "identify",
    "question": "Przeczytaj opis fikcyjnego artykułu. Zaznacz elementy, które pomagają SPRAWDZIĆ jego wiarygodność.",
    "intro": "Artykuł: „Czy ekrany wpływają na sen?”",
    "parts": [
      "Autorka: Anna Nowak, specjalistka ds. snu",
      "Data publikacji: 4 listopada 2026 r.",
      "Tytuł zapisany dużą czcionką",
      "Link do opisanego badania",
      "Zdjęcie w wysokiej rozdzielczości"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "points": 3
  },
  {
    "id": 14,
    "type": "order",
    "question": "Widzisz zdjęcie rzekomo przedstawiające dzisiejszą powódź. Ułóż plan sprawdzenia go w rozsądnej kolejności.",
    "items": [
      "Sprawdzam, czy zdjęcie pojawiało się już wcześniej w internecie.",
      "Czytam, co dokładnie twierdzi podpis i kto go opublikował.",
      "Szukam aktualnych komunikatów i materiałów z innych wiarygodnych źródeł.",
      "Dopiero po weryfikacji decyduję, czy warto przekazywać zdjęcie dalej."
    ],
    "correct": [
      1,
      0,
      2,
      3
    ],
    "points": 4
  },
  {
    "id": 15,
    "type": "multi",
    "question": "Wpis mówi: „To oficjalna wiadomość!”, ale prowadzi do strony podszywającej się pod urząd. Co sprawdzisz przed uznaniem informacji za wiarygodną?",
    "options": [
      "Dokładny adres strony i to, kto ją prowadzi",
      "Czy komunikat znajduje się na prawdziwej stronie instytucji",
      "Czy wpis ma dużo serduszek",
      "Czy istnieją inne niezależne potwierdzenia"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "points": 3
  }
];
export const totalPoints = questions.reduce((s,q)=>s+q.points,0);
