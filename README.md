# solvro.pl

Wizytówka Koła Naukowego Solvro pod domeną `solvro.pl` — zbiór linków do strony
głównej koła (`solvro.pwr.edu.pl`), projektów i social mediów.

Domena wcześniej przekierowywała na `solvro.pwr.edu.pl`, przez co Google
przestał ją indeksować. Ta strona serwuje pod `solvro.pl` własną, indeksowalną
treść (metadane, JSON-LD, `robots.txt`, `sitemap.xml`).

## Stack

Vite + React + TypeScript, Tailwind CSS v4, shadcn/ui.

## Rozwój

```bash
pnpm install
pnpm dev
```

| Skrypt              | Opis                     |
| ------------------- | ------------------------ |
| `pnpm dev`          | serwer deweloperski      |
| `pnpm build`        | build produkcyjny        |
| `pnpm preview`      | podgląd builda           |
| `pnpm typecheck`    | `tsc -b`                 |
| `pnpm lint`         | oxlint                   |
| `pnpm format`       | prettier (zapis)         |
| `pnpm format:check` | prettier (tylko sprawdź) |

Wszystkie powyższe sprawdzenia uruchamia GitHub Actions
(`.github/workflows/ci.yml`) na push do `main` i na pull requestach.

## Treść

Linki do projektów i social mediów trzymane są w `src/data/site.ts`.
