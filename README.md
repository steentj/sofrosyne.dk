# Sofrosyne.dk

En lille statisk dansk side om klassisk filosofi (sofrosyne). Ingen build‑pipeline – kun HTML, Tailwind CDN, et fælles `styles.css` og et lille `theme.js` til mørkt tema og mobilmenu. Siden er er lavet som eksperiment i vibe-coding, så alt indhold er AI genereret. Initiel AI model: GPT-5 (preview)

## Indhold & Struktur
| Fil | Formål |
|-----|--------|
| `index.html` | Forside med hero (baggrund via CSS variabel `--hero-image`) og introduktion |
| `historie.html` | Kort historisk oversigt (kan udbygges) |
| `galleri.html` | Galleri med lokale billeder (`images/`) + `loading="lazy"` og `onerror` fallback |
| `citatbibliotek.html` | Citatsamling med `<blockquote>` + `<cite>` (parafraser tydeligt markeret) |
| `om.html` | Attribution / kilde- og licensoversigt ("Kilde ønskes" ved manglende reference) |
| `styles.css` | Farvevariabler, kort-/hero-styles, dark-mode overrides, animationer |
| `theme.js` | Tema-toggle (localStorage) + hamburgermenu for små skærme |
| `images/` | Lokale JPG aktiver (ingen eksterne links i drift) |

## Nøglefunktioner
- Mørkt/lyst tema (persist via `localStorage` key `theme`).
- Hero-billede styres via inline style: `style="--hero-image: url('sofrosyne.jpg')"`.
- Responsiv hamburgermenu (`#menu-toggle` ↔ `#nav-links`).
- Galleriets billeder har `onerror` fallback til `sofrosyne.jpg` for robusthed.
- Citater bevarer kilde/transparens gennem `<cite class="...">`.
- Attribution samlet centralt på `om.html`.

## Udviklingsworkflow
1. Åbn mappen i VS Code.
2. Brug en live server (eller åbn filerne direkte i browser) – ingen build krævet.
3. Redigér HTML/CSS/JS – gem – refresh.

## Tilføj en ny side
1. Kopiér header + footer markup fra fx `historie.html`.
2. Tilføj link i navigation på ALLE eksisterende sider og sæt `aria-current="page"` på den nye side.
3. (Valgfrit) Hero: `<section class="hero" style="--hero-image: url('ny-fil.jpg')">` og placér billedet i `images/`.
4. Opdatér attribution i `om.html` hvis der bruges nye billeder.

## Tilføj et nyt galleri-billede
1. Læg fil i `images/` (fx `stoic.jpg`).
2. Kopiér et kort i `galleri.html` og opdatér `src`, `alt` og titel.
3. Behold `loading="lazy"` og `onerror` fallback hvis billedet ikke er kritisk.
4. Tilføj attribution-blok i `om.html`.

## Licenser & Attribution
- Verificerede: Platon (CC BY 2.5), Aristoteles (Public Domain), Pixabay billed(er) (Pixabay Content License), hero (AI-genereret – markeret indtil evt. specifik licens defineres).
- "Kilde ønskes" = skal opdateres så snart en pålidelig URL + licens er kendt.
- Ved ændringer/beskæring: noter i attribution.

## Tjekliste før commit
- [ ] Navigation identisk på tværs af alle sider.
- [ ] Tema-toggle fungerer (ikon skifter 🌙/☀️ korrekt).
- [ ] Mobilmenu åbner/lukker under 640px (☰ → liste).
- [ ] Relative stier til billeder korrekte (ingen førende `/`).
- [ ] Nye billeder har attribution på `om.html`.
- [ ] Ingen tunge ekstra biblioteker tilføjet.

## GitHub Pages Deploy (simpelt)
1. Push til GitHub.
2. I repo settings: Pages → Source: `main` + root (`/`).
3. Vent på URL. Test mørkt/lyst tema og mobilmenu.

## Ydelse & Principper
- Hold JS minimal (én fil `theme.js`).
- Undgå unødvendige tredjeparts scripts.
- Optimer billeder før upload (komprimer til fornuftig størrelse).

## Fremtidige forbedringer (idéer)
- Automatisk luk menu når et link vælges på mobil.
- Mere præcis kilde (bog/kapitel/afsnit) for citater.
- Evt. let søgning/filter i citatbibliotek.

Bidrag: Send PR med små, fokuserede ændringer. Ingen frameworks uden stærk begrundelse.
