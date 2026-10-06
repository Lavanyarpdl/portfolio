# Lavanya R — Portfolio (React + Vite)

## Setup
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually http://localhost:5173).

## Build for deployment
```bash
npm run build
```
This outputs a static `dist/` folder you can deploy to Vercel, Netlify, GitHub Pages, etc.

## Structure
- `src/App.jsx` — composes all sections
- `src/components/` — Header, Hero, About, Skills, Work, Footer
- `src/data.js` — all your content (name, bio, skills, projects) in one place — edit here to update the site
- `src/index.css` — all styling, using CSS variables at the top for colors/fonts
- `public/resume.pdf` — your resume; the "Download resume" button in the Hero links here. Replace this file to update your resume without touching any code.

## Notes
- No component libraries required beyond React itself — everything is plain CSS.
- The animated flight-route line in the hero respects `prefers-reduced-motion`.
