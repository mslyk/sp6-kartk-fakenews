# Kartkówka — fake news, klasa 6b

Gotowy projekt do GitHub → Vercel. 15 zadań, 36 punktów. Oceny według przesłanej tabeli. Przechodzenie tylko do przodu, bez podpowiedzi; punkty i poprawne odpowiedzi pojawiają się po zakończeniu i wysłaniu raportu.

## Uruchomienie (jak w KarelmaTech)

1. Wgraj zawartość tego folderu (nie sam folder) do repozytorium na GitHub. Najlepiej użyj repozytorium **prywatnego**, ponieważ plik `lib/questions.js` zawiera klucz odpowiedzi.
2. W Vercel wybierz **Add New → Project → Import** i wskaż repozytorium. Framework Preset: `Other`. Katalog główny projektu jako Root Directory. Domyślnie Vercel obsłuży katalog `public` i funkcje `api`.
3. W Vercel otwórz **Settings → Environment Variables** i dodaj TYLKO JEDNĄ zmienną:

   - Nazwa: `RESEND_API_KEY`
   - Wartość: pełny klucz `re_...` z Resend
   - Środowisko: **Production** (opcjonalnie także Preview)

4. Zapisz zmienną i uruchom **Redeploy** (lub nowy deployment). Otwórz adres projektu, przetestuj wysłanie pracy.

Adres docelowy `magdalena.slyk@zstil.pl` i nadawca `Kartkowka <onboarding@resend.dev>` są wpisane bezpośrednio w `api/submit.js`. Nie trzeba dodawać `RESULTS_TO` ani `RESEND_FROM`.

### Bardzo ważne: ograniczenie Resend

Adres `onboarding@resend.dev` jest testowym nadawcą Resend. Umożliwia zwykle wysyłkę tylko na adres właściciela konta Resend. Jeśli `magdalena.slyk@zstil.pl` nie jest adresem właściciela konta, Resend **odrzuci wysyłkę**. Wtedy trzeba zweryfikować domenę w Resend i zmienić tylko linię `const sender=...` w `api/submit.js` na nadawcę z tej domeny; w Vercel nadal wymagana jest tylko jedna zmienna `RESEND_API_KEY`.

### Dane i bezpieczeństwo

Pytania są udostępniane bez poprawnych odpowiedzi. Serwer sprawdza wynik i wysyła mail z pełną punktacją oraz poprawnymi odpowiedziami. Brak powrotu i jedno podejście są egzekwowane w przeglądarce przez `localStorage`, ale nie jest to pewna blokada przed podmianą przeglądarki lub wyczyszczeniem pamięci. Wysyłki nie mają centralnej bazy danych — uczeń może podać inne nazwisko i spróbować ponownie.

**Przed kartkówką:** Przetestuj na własnym koncie skuteczne doręczenie maila, nie tylko widok wyniku.

## Dlaczego po otwarciu index.html z dysku widać komunikat?

Kartkówka korzysta z funkcji API (pytania i automatyczna wysyłka wyników). Nie działa w trybie `file://`, czyli po dwukrotnym kliknięciu pliku `public/index.html`.

- Najłatwiejsze sprawdzenie: wdrożenie na Vercel i otwarcie strony z adresu `https://...vercel.app`.
- Test lokalny: zainstaluj Node.js, otwórz terminal w katalogu projektu, wykonaj `npx vercel dev`, przejdź przez powiązanie z projektem Vercel i otwórz adres localhost podany w terminalu. Aby przetestować wysyłanie wyników lokalnie, przygotuj klucz w lokalnym środowisku zgodnie z instrukcjami Vercel.
# sp6-kartk-fakenews
