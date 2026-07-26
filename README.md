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
- The 📖 button opens your recipe book with every combo you've discovered.

## Editing the game data

All elements and recipes live in `ELEMENTS` and `RECIPES` at the top of
`script.js`. Add a new element to `ELEMENTS`, then add
`["ingredientA", "ingredientB", "resultId"]` to `RECIPES` — both the combine
and the extract direction are generated automatically from that one entry.
