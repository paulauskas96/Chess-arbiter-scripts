# Chess Arbiter Scripts

Browser bookmarklets for chess arbiters working with [chess-results.com](https://chess-results.com).

---

## Scripts

| Folder | What it does |
|---|---|
| [`pgn-export/`](pgn-export/) | Source for the PGN export bookmarklet |
| [`pairings-format/`](pairings-format/) | Source for the pairings formatter bookmarklet |
| [`bookmarklets/`](bookmarklets/) | Bookmarklet HTML files ready to import |

---

## Installing the bookmarklets

Import the file(s) from the [`bookmarklets/`](bookmarklets/) folder directly into your browser:

### Chrome

1. Open [chrome://bookmarks/](chrome://bookmarks/)
2. Click **⋮** → **Import bookmarks** and select the downloaded file.
3. Drag the entries from *Imported* to your **Bookmarks bar**.

### Firefox

1. Press `Ctrl+Shift+O` to open the Library.
2. Click **Import and Backup → Import Bookmarks from HTML…** and select the file.
3. Drag the entries to your **Bookmarks Toolbar**.

### Edge

1. Open [edge://favorites/](edge://favorites/)
2. Click **⋮** → **Import favorites** → **Favorites or bookmarks HTML file** and select the file.
3. Drag the entries to your **Favorites bar**.

---

## Using the bookmarklets

### FORMAT PAIRINGS
Navigate to any pairings page on chess-results.com and click the bookmarklet.  
It cleans up the page layout and adds a *show next round* link.

### EXPORT PGN
1. Navigate to a **Board Pairings** page (URL contains `art=2`) and click **EXPORT PGN**.
2. Enter the number of boards to export when prompted.
3. A `.pgn` file downloads automatically, with ratings and FIDE IDs included.

> Supported site languages: English (`lan=1`) and Lithuanian (`lan=30`).
