# Random-Rounder

Tiny static practice page (HTML + CSS + vanilla JS). No build, no dependencies, no tests.
Global rules: `~/.claude/CLAUDE.md` (branch + PR flow, no secrets, never claim what isn't built).

## Commands (all verified)
- Open: `open randomRounder.html`
- Syntax check (what CI runs): `node --check randomRounder.js`

## Layout
- `randomRounder.html` page, `randomRounder.css` styles, `randomRounder.js` all logic (`randomizeButton`, `resetButton`).

## Conventions / do not touch
- Work on a feature branch, PR to `main`; never push to `main`.
- Hygiene-only history: app logic was intentionally not changed. Known bugs are listed in README.md under "Known issues"; fix them with a test, not silently.
- Repo is PUBLIC: no credentials, client names or personal data.
