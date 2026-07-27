# Brainrot Alchemy

A Little-Alchemy-style crafting game with TikTok brainrot elements, plus a
twist: you can also **subtract** elements from each other, not just combine
them.

## Project structure

```
brainrot-alchemy/
├── index.html    → structure / UI only, no logic
├── style.css     → all visual styling
├── script.js     → all game logic, drag & drop, and the account system
├── users.json    → example/seed database file (schema reference)
└── README.md     → this file
```

## Running it

No build step, no server required. Just open `index.html` in a browser.

## Accounts

Login is **username only, no password**. This is a local prototype, not a
secure multi-user system — anyone who knows a username can load that save.

- Enter a new username → creates an account with the 6 starter elements.
- Enter an existing username → loads that account's unlocked elements.

Since the app is pure client-side (no server), there's no real disk to write
`users.json` to while you play. Instead, `script.js` keeps a database object
in memory and mirrors it into the browser's `localStorage` under the key
`brainrotAlchemyDB`, using **exactly** the same JSON shape as `users.json`:

```json
{
  "users": {
    "yourusername": {
      "displayName": "yourusername",
      "discovered": ["raw_milk", "healthy", "holy_height", "..."],
      "discoveryOrder": ["holy_height", "hullo", "..."],
      "createdAt": "2026-07-26T12:00:00.000Z"
    }
  }
}
```

Use the **⬇️ Export** button in-game to download your live database as a real
`users.json` file, and **⬆️ Import** to load one back in (e.g. to move your
save to another browser/computer, or to hand-edit it).

## Game rules

- **➕ Combine mode**: drop one element on another to craft a new one.
- **➖ Extract mode**: drop an element you already own onto a crafted element
  to subtract it and reveal the other ingredient — e.g. if you have
  `Holy Height` (= Raw Milk + Healthy) but not `Raw Milk` yet, drop `Healthy`
  onto `Holy Height` to extract `Raw Milk`.
- The 📖 button opens the Lexicon: a **Recipes** tab (every combo you've
  discovered) and an **Index** tab (every element that exists in the game,
  greyed out until you've found it — no recipes shown there).
- The 🏆 button opens Achievements. Currently tracks one: discovering every
  single element in the game.
- Drag an element onto the 🗑️ trash icon to delete it, or press and hold the
  trash icon for 2.5 seconds to clear every element currently on the board.
- Short sound effects (combine, discover, delete, achievement, UI clicks) are
  generated on the fly with the Web Audio API — no audio files, no music.
- The 🎨 button lets you pick a theme: Purple, Dark Grey, or White. There's a
  4th secret theme — redeem the right code in the 🔑 Codes button to unlock it.

## Background music

The header has a volume slider and a ☰ button (music picker) that are
always visible. **This repo doesn't include an actual audio file** — drop
your own `bg_music.mp3` into the project root (same folder as `index.html`)
and it'll play automatically. No code changes needed, just the file with
that exact name.

Redeeming the code `strawberry` in the 🔑 Codes button adds a second,
secret track to the ☰ picker — add a `niche_bg_music.mp3` file to the root
too. It stays invisible in the picker until you redeem the code.

Browsers block autoplay-with-sound until you've clicked/pressed something on
the page at least once — the game handles that automatically (music starts
on the first click if it couldn't start immediately). Volume, selected
track, and unlocked tracks are remembered per browser.

There's also a small animated bar visualizer in the header (between the logo
and the stats) that reacts to whatever's currently playing — it's driven by
a Web Audio `AnalyserNode`, bars only grow upward from a flat baseline, and
their color follows whichever theme is active.

## Editing the game data

All elements and recipes live in `ELEMENTS` and `RECIPES` at the top of
`script.js`. Add a new element to `ELEMENTS`, then add
`["ingredientA", "ingredientB", "resultId"]` to `RECIPES` — both the combine
and the extract direction are generated automatically from that one entry.
