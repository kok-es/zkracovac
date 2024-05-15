# Vojtův zkracovač
Zkracovač je užitečný prostředek pro nikoho! Po vložení požadované cesty a cílové adresy vygeneruje nový odkaz, který je možné sdílet na internetu.

## Popis funkce
- Uživatelské rozhraní je vytvořené ve webovém frameworku Next.js
- Po vložení údajů jsou data odeslána na back-end, který je taktéž vytvořen pomocí Next.js pomocí server actions
- Back-end data uloží do postgresql databáze
- Po otevření zkráceného odkazu si server najde požadovanou cestu v databázi a přesměruje klienta na příslušnou adresu

## Hosting
Databáze je hostovaná zdarma u Neon.tech
Rozhraní a back-end je hostovaný zdarma jako hobby projekt u Vercel-u

## Plán do budoucna
Do budoucna bych chtěl přidat i sledování počtu otevření odkazů, abych mohl sledovat, kolik lidí na odkazy kliklo