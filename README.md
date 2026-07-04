# Notepad — Rewritten in KBs (Microsoft Edition)

The pilot episode: Microsoft Notepad, rewritten smaller.

Modern Notepad is ~274KB on disk and ~59MB of RAM to open a text box. This is
the part users actually use — as an **installable app of 4.94KB** (HTML +
manifest + service worker + a single SVG icon). No Electron, no Chromium bundle,
no build step. That's ~55× smaller than the .exe it replaces.

## Comparison

Microsoft's figures are for Notepad on Windows 11; this build was measured in
headless Chrome against the live page.

| Metric | Microsoft Notepad | This build | Result |
|---|---|---|---|
| On disk | 274 KB | **4.94 KB** (2.2 KB gzipped) | **55× smaller** |
| Cold load | 380 ms | **27 ms** (15 ms to DOM-ready) | **14× faster** |
| Memory | 59 MB (process) | **1.23 MB** (JS heap) | **~48× smaller** |
| Dependencies | `.exe` + system DLLs | 4 static files, **0 deps** | — |
| Source | closed | **45 lines** of vanilla JS | — |
| Requests to first paint | n/a | 3 | — |
| Offline | yes | yes | tie |

Notes: "on disk" is the four shipped files summed; GitHub Pages gzips them to
~2.2 KB over the wire (~123× smaller). The memory row is a like-for-like of what
the *app itself* allocates — Notepad's 59 MB is its whole process, this build's
1.23 MB is its JS heap (the tab adds shared browser overhead on top). The app
creates just 51 DOM nodes and 8 event listeners.

## Install it

**As a desktop app (recommended):**

1. Open the live app in Chrome or Edge:
   https://ollielarkins.github.io/RewrittenInKBs-MicrosoftEdition/
2. Click the **Install** icon in the address bar (or ⋮ menu → *Install Notepad*).
3. It's now a real app: its own window and icon, launches from Start, and
   **works fully offline** — fresh out of the box.

**Or just run the file:** open `index.html` in a browser. (Save-back-to-disk
needs a `localhost`/`https` origin — on the installed app and the live URL it
works; double-clicking the raw file falls back to a download.)

## Features (the ones that matter)

- ✅ Edit plaintext
- ✅ Save / **Save As** / open `.txt` files — native OS file dialogs, writes back to the file
- ✅ Undo / redo (free — native to the `<textarea>`)
- ✅ Auto-save (LocalStorage — never lose your work)
- ✅ Status bar — live line/column and word/character count
- ✅ Filename in the title bar, with a • when there are unsaved changes
- ✅ Offline + installable (service worker + web manifest)

Gone on purpose: OneDrive sync, tabs, encoding pickers, CRLF/LF dialogs, font
pickers, Copilot.

Keyboard: `Ctrl+S` save, `Ctrl+Shift+S` save as, `Ctrl+O` open,
`Ctrl+Z`/`Ctrl+Y` undo/redo.

## How it's hosted

Pushing to `main` triggers `.github/workflows/pages.yml`, which publishes the
repo root to GitHub Pages. **One-time setup:** in the repo, go to
*Settings → Pages → Build and deployment → Source* and select **GitHub Actions**.
