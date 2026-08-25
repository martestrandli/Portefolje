# Marte Strandli — portefølje (kode)

Dette er nettsiden din som ren kode: HTML, CSS og litt JavaScript. Ingen installasjon, ingen byggeverktøy — bare filer.

## Se siden med en gang

Dobbeltklikk på `index.html`. Den åpner seg i nettleseren din og du kan klikke deg rundt akkurat som en ferdig side. Ingen internett-tilkobling er nødvendig for å se strukturen, men fonten (Inter) lastes fra Google Fonts, så med internett ser teksten riktig ut. Kontaktskjemaet virker ikke lokalt — se eget avsnitt om det under.

## Mappestruktur

```
index.html              → Forsiden
prosjekter.html          → Oversikt over alle prosjekter
om-meg.html               → Om meg-siden
kontakt.html              → Kontaktsiden (med skjema)
kontakt-takk.html         → Takk-siden som vises etter innsendt skjema
404.html                  → Vises automatisk når noen treffer en lenke som ikke finnes
prosjekter/               → Én fil per prosjekt
  hangout.html
  p-podden.html
  pokemon.html
  nordlys.html
css/styles.css            → All styling (farger, fonter, layout) — én fil for hele siden
js/main.js                 → Meny-nedtrekk, kopier-e-post, spørsmål/svar-liste, bilde-fallback, "til toppen"-knapp
images/                    → Alle bildene dine legges her (se listen under)
```

## Farger og font

Alt er samlet øverst i `css/styles.css`, i `:root{ ... }`. Grønn brukes til ringer/prikker/mørke knapper, rosa til overskrifter/lenker/logoen. Endrer du en fargekode der, oppdateres den overalt på siden automatisk.

## Slik legger du inn bilder

Hvert bilde som mangler vises som en lys boks med filnavnet det leter etter, i stedet for et knekt bilde-ikon. Du trenger ikke endre noe i koden — bare legg bildefilen i `images/`-mappen med **akkurat** dette filnavnet, så dukker det opp automatisk:

| Filnavn | Brukes til |
|---|---|
| `profil.jpg` | Rundt profilbilde i toppen av forsiden |
| `om-meg.jpg` | Bilde i "Om meg"-teaseren på forsiden |
| `om-meg-palett.jpg` | Bilde på Om meg-siden |
| `hangout-cover.jpg` | Prosjektkort-bilde for HangOUT (forside + oversikt) |
| `p-podden-cover.jpg` | Prosjektkort-bilde for P-Podden |
| `pokemon-cover.jpg` | Prosjektkort-bilde for Pokemon Arcade spill |
| `nordlys-cover.jpg` | Prosjektkort-bilde for Lær deg nordlys |
| `hangout-1.jpg` … `hangout-4.jpg` | Bilder på HangOUT-prosjektsiden (1 = toppbilde) |
| `p-podden-1.jpg` … `p-podden-6.jpg` | Bilder på P-Podden-prosjektsiden |
| `pokemon-1.jpg` … `pokemon-4.jpg` | Bilder på Pokemon-prosjektsiden |
| `nordlys-1.jpg` … `nordlys-5.jpg` | Bilder på Nordlys-prosjektsiden |

Tips: jo mer like størrelser (bredde/høyde-forhold) bildene har innad i samme gruppe, jo penere blir rutenettet. Cover-bildene vises i format 4:3, prosjektsidenes toppbilder i 16:9. Prosjektkortene på forsiden/oversikten viser tittelen som en liten overlegg-tekst når du holder musepekeren over bildet.

## Kontaktskjemaet — viktig

Skjemaet på `kontakt.html` er satt opp for **Netlify Forms**. Det betyr at det virker helt automatisk, uten at du trenger noen egen server, men **kun etter at siden er publisert på Netlify** (se byggeplanen for hvordan). Åpner du filen lokalt (dobbeltklikk), eller hoster du et annet sted enn Netlify, vil ikke skjemaet sende noe sted. Hvis du senere velger en annen hostingtjeneste, si ifra i samtalen med Claude, så bytter vi skjemaet til en tjeneste som fungerer der (f.eks. Formspree).

## Innhold som er utkast

Svarene i spørsmål/svar-listen på Om meg-siden er fortsatt utkast — spørsmålene er hentet fra din ekte side, men svarene må du skrive selv. Søk etter "Utkast" i filene, eller si ifra i samtalen med Claude, så skriver vi dem sammen.

## Neste steg

Se den interaktive byggeplanen for resten av prosessen (hosting, domene, publisering): den er lenket i samtalen med Claude.
