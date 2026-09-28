# FinSight X

FinSight X — Financial Intelligence Platform for analysts and risk teams. It provides compressed AI summaries, change detection, signals & risk chains, evidence-backed analysis, and an audit pipeline to help analysts make faster, higher-fidelity decisions.

## Key features
- Interactive dashboard with KPIs and trend sparklines
- Reports & evidence browser with audit trail
- Signal detection (risk/positive/info) and alerting
- Change intelligence and risk-chain visualization
- Auditing pipeline and fidelity scoring
- Lightweight single-repo frontend (React + Vite + Tailwind)

## Stack
- Language: JavaScript (ES Modules)
- Framework/runtime: React 18 with Vite
- UI: Tailwind CSS, Inter font
- Charts: Recharts
- Routing: react-router-dom
- Notable tooling: Vite, PostCSS, Tailwind, @vitejs/plugin-react

## Project structure (top-level)

```
index.html           # App entry HTML
package.json         # scripts & deps
vite.config.js       # vite config
tailwind.config.js   # styling config / theme
postcss.config.js
setup.mjs            # reconstruct files from files.txt + npm install (one-command installer)
files.txt            # project source snapshot (used by setup.mjs)
src/                 # application source
  main.jsx           # React entrypoint
  index.css          # Tailwind + base styles and component classes
  App.jsx            # Router + high-level layout (Sidebar/Topbar/EvidencePanel)
  components/        # UI components (Sidebar, Topbar, EvidencePanel, ui primitives)
  pages/             # Page views (Dashboard, Reports, Signals, ChangeIntelligence, RiskIntelligence, Auditor, AskReport, Evidence, AuditLog, Settings, Upload)
  data/               # mockData.js (sample data + signals, alerts, audit logs)
  hooks/              # app state hooks (useAppState)
  utils/              # small helpers (format, analysis)
```

## How to run (development)

- Recommended (normal workflow)
  1. Clone the repo:
     git clone https://github.com/deepagunalan07/finsight-x.git
     cd finsight-x
  2. Install dependencies:
     npm install
  3. Start dev server:
     npm run dev
  4. Open:
     http://localhost:5173

- One-command installer (if you distributed files.txt + setup.mjs):
  node setup.mjs
  This will recreate files from files.txt then run npm install. After that:
  npm run dev

Build / Preview
- Build production bundle:
  npm run build
- Preview production build:
  npm run preview

Environment & Secrets
- No obvious required environment variables in the repo. If you add API keys or backend integrations, document them here and how to provide them (env files, .env, or CI secrets).

Notes for contributors / maintainers
- Routing and pages: src/App.jsx defines the HashRouter routes and available pages. Add new routes in that file.
- Mock data & evidence flow: src/data/mockData.js contains sample signals, alerts, reports, and audit logs — useful for local development and UI prototyping.
- Styling: Tailwind theme and custom colors are in tailwind.config.js; main css in src/index.css uses @layer components to define reusable classes (card, badge, btn-*).
- Charts: Recharts is used for sparklines and charts (see pages that render metric trends).
- The setup.mjs + files.txt are used to pack/unpack the full app from a single-file snapshot — keep files.txt updated if you want to re-export the snapshot.

Suggested README sections you may want to add later
- Screenshots / GIFs of the UI (Dashboard, Risk view, Evidence panel)
- Architecture diagram if you integrate a backend or AI pipeline
- API docs / format if you plan to support file uploads to a server
- CI/CD / deployment steps (Netlify / Vercel / GitHub Pages / Docker)

License
- Not specified in the repo. Add a LICENSE file (e.g., MIT) if you want this to be open-source.

Contributing
- Add a CONTRIBUTING.md with commit style, branches, PR process, and local dev checks (lint, tests).
