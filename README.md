# Eduvibe — College Events (Next.js + Tailwind)

Light lavender/purple redesign based on the supplied Eduvibe reference screenshot. Existing routes and file structure retained.

## Install & run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Tech
- Next.js 15 / App Router
- React 19 + TypeScript
- Tailwind CSS 3.4 (not Tailwind 4)
- lucide-react

## Pages
`/` home, `/events` events, `/events/[id]` details/registration, `/login`, `/register`, `/dashboard`, `/admin`, `/gallery`, `/contact`, `/leaderboard`.

## Notes
- Frontend demo, no backend. Registration and demo session use browser localStorage, not real authentication or secure admin access.
- Sample names, dates, prize amounts and contact info should be replaced with actual college data.
- Hero campus image is cropped from the reference design illustration, not an independently verified photo of the college.
- Website visual layout is recreated, not a guaranteed pixel-perfect match.
