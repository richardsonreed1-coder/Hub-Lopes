# Hub-Lopes

Traffic hub for Lopes properties. Built with Next.js 15 (App Router) + Tailwind.

## Status

Scaffold only. Content in `src/lib/site-config.ts` is placeholder copy because
`https://lopes-web.vercel.app/` is unreachable from the build environment
(sandbox returns `403 host_not_allowed`). Replace the entries in
`siteConfig`/`sections` with the real Lopes content.

## Scripts

```bash
pnpm install
pnpm dev        # local dev
pnpm build      # production build
pnpm typecheck  # tsc --noEmit
```

## Structure

- `src/app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/components/` — `Header`, `Hero`, `SectionGrid`, `Footer`
- `src/lib/site-config.ts` — All copy and link data; edit here to update the hub

## Branch

Development happens on `claude/traffic-hub-builder-setup-sCw9w`.
