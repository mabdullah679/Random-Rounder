# Random-Rounder

A one-page browser toy: type a count, click Randomize, and it prints that many random numbers each with its rounded value.

```
 browser --> randomRounder.html --> randomRounder.js --> <p> lines in #printOuts (+ console.log)
```
Everything runs locally in the browser; nothing external is needed.

## Prerequisites
A web browser. Node 18+ only if you want the syntax check. No build, no packages.

## Run it
1. `git clone https://github.com/mabdullah679/Random-Rounder && cd Random-Rounder`
2. Open `randomRounder.html` (macOS `open randomRounder.html`, Linux `xdg-open`, Windows `start`).
3. Type a whole number in the box, click **Randomize**.

If nothing prints, open the browser console; an empty or non-numeric box prints nothing.

## What it does
| Action | Result |
|---|---|
| Randomize with N in the box | Appends 2 lines per iteration: the random value, and its rounded result (first decimal digit < 5 rounds down, otherwise up). Also logs each step to the console. |
| Reset | Clears the printed lines. |

## Tests
None exist. CI (`.github/workflows/ci.yml`) only runs `node --check randomRounder.js` and confirms the page links its CSS and JS. That proves the file parses, not that it behaves.

## Layout
| Path | Role |
|---|---|
| [randomRounder.html](randomRounder.html) | Page markup |
| [randomRounder.css](randomRounder.css) | Styles |
| [randomRounder.js](randomRounder.js) | All logic |
| [.github/workflows/ci.yml](.github/workflows/ci.yml) | Syntax check |
| [CLAUDE.md](CLAUDE.md) | Repo notes for Claude sessions |

## Known issues (found, not fixed in this hygiene pass)
- The page text says numbers are "between 1 and 100". The code produces values from 0 up to just under 90 (random * 9 * 10; simulated 1,000,000 draws, max 90.0). The `startingValue` array is only used for its length.
- If a generated value prints with no decimal part, `decimals.length` throws and the run stops.
- Several lines are dead or no-ops (e.g. `parseInt` on the input element, `document.getElementById("")`).
