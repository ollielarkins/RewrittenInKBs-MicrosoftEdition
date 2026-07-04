# Notepad — Rewritten in KBs (Microsoft Edition)

The pilot episode: Microsoft Notepad, rewritten smaller.

Modern Notepad is ~274KB on disk and ~59MB of RAM to open a text box. This is
the part users actually use — as an **installable app under 4.8KB** (HTML +
manifest + service worker + a single SVG icon). No Electron, no Chromium bundle,
no build step. That's ~58× smaller than the .exe it replaces.

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
