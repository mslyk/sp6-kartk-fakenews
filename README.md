# Kartkówka Fake news – klasa 6b (interaktywna)

15 zadań, 47 punktów, około 20 minut. Typy: jedno-/wielokrotny wybór, zaznaczanie fragmentów, dopasowywanie, kolejność (przeciąganie/strzałki), klasyfikacja, prawda/fałsz w tabeli, uzupełnianie luk, krótkie odpowiedzi.

## Wdrożenie
1. Wgraj **zawartość** ZIP do repozytorium GitHub. Zalecane repozytorium prywatne, bo klucz odpowiedzi jest w `lib/questions.js` (serwer, nie frontend).
2. Vercel → Add New → Project → wybierz repozytorium, Framework Preset: `Other`.
3. Settings → Environment Variables: `RESEND_API_KEY` = Twój klucz Resend.
4. Redeploy. Odbiorca jest zapisany w API: `magdalena.slyk@zstil.pl`; nadawca to `onboarding@resend.dev` (konto Resend musi dopuszczać wysyłkę do odbiorcy).
5. Wykonaj jedno testowe przejście i sprawdź dostarczenie maila.

## Ważne
- Nie otwieraj `public/index.html` jako pliku; testuj po wdrożeniu lub przez `npx vercel dev`.
- Kliknięcie „Dalej” zatwierdza odpowiedź i nie umożliwia powrotu. Postęp zapisywany lokalnie.
- Wynik, ocena i klucz odpowiedzi pojawią się dopiero po pomyślnej wysyłce przez serwer.
- Zadania są oceniane **zero-jedynkowo jako całość**, także dopasowanie i porządkowanie. Brak punktów cząstkowych. Progi ocen są identyczne jak w przesłanej tabeli.
- Nie jest to bezpieczna platforma egzaminacyjna. Uczeń może ponownie uruchomić przeglądarkę z wyczyszczonymi danymi; bez bazy danych nie da się niezawodnie wymusić jednej próby na osobę. Opcjonalnie obecna w projekcie blokada Upstash Redis działa po dodaniu zmiennych, ale nie jest wymagana do wysyłania.
- W krótkiej odpowiedzi akceptowane są tylko przewidziane warianty językowe, przy ignorowaniu wielkości liter i odstępów.
