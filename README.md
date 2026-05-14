# Hub-Lopes

Traffic hub for Lopes Capital — a Scottsdale multi-family office. Ports the
Lopes Capital site into a self-contained Next.js 16 / Tailwind v4 / motion app.

Sourced from `richardsonreed1-coder/Lopes-Web` branch
`claude/lopes-capital-frontend-VmRVQ`. The live preview was unreachable from
the build environment (Vercel host blocked by sandbox egress), so content was
pulled from the upstream repo over the GitHub API.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4 (`@theme` tokens in `app/globals.css`)
- `motion` for animation
- TypeScript

## Scripts

```bash
pnpm install
pnpm dev        # local dev (Turbopack)
pnpm build      # production build
pnpm typecheck  # tsc --noEmit
pnpm lint
```

## Routes

- `/` — homepage: WebGL mist background, animated SectorStack, four operating
  principles, footer meta.
- `/[category]` — ledger detail pages for the five sectors:
  - `/capital-markets`
  - `/real-estate`
  - `/education`
  - `/healthcare`
  - `/media-consumer`
- `/discover`, `/develop`, `/deliver`, `/disrupt` — pillar pages (the four
  operating principles).

## Content

All copy and link data lives in `lib/content.ts`:

- `ledgers` — five sector ledgers + a Letters volume.
- `pillars` — four operating principles (Discover / Develop / Deliver / Disrupt).
- `letters` — 2018–2025 annual letters.
- `operators` — operator ledger entries.
- `epochs` — top-line firm timeline.

## Branch

Development on `claude/traffic-hub-builder-setup-sCw9w`.
