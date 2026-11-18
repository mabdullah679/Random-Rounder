RANDOM-ROUNDER

What it is: a small web page. You type how many times you want, press Randomize, and it shows that many random numbers, each with a rounded version next to it. Reset clears the list.

How it runs: you just open randomRounder.html in a browser. Nothing else is needed. There is no server, no build and no outside service.

How the rounding works: it looks at the first digit after the decimal point. Under 5 rounds down, 5 or more rounds up. Each step is also written to the browser console.

Tests: there are none. The automatic check on GitHub only confirms the JavaScript file has no syntax errors and that the page points at its CSS and JS files. It does not prove the page behaves correctly.

Known problems, found but deliberately not fixed in this cleanup:
- The page says the numbers are between 1 and 100. In reality they run from 0 to just under 90 (checked with 1,000,000 simulated draws, biggest was 90.0).
- If a random value happens to have no decimal part, the code crashes and the run stops.
- A few lines of code do nothing.

Files: randomRounder.html (page), randomRounder.css (look), randomRounder.js (logic), CLAUDE.md (notes for Claude), .github/workflows/ci.yml (the automatic check).
