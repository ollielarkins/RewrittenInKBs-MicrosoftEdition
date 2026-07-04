# Notepad — Rewritten in KBs (Microsoft Edition)

The pilot episode: Microsoft Notepad, rewritten smaller.

Modern Notepad is ~274KB on disk and ~59MB of RAM to open a text box. This is
the part users actually use — as an **installable app under 8.4KB** (HTML +
manifest + service worker + all three icons). No Electron, no Chromium bundle,
no build step. That's ~33× smaller than the .exe it replaces.

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
- ✅ Save / open `.txt` files — native OS file dialogs, writes back to the file
- ✅ Undo / redo (free — native to the `<textarea>`)
- ✅ Auto-save (LocalStorage — never lose your work)
- ✅ Offline + installable (service worker + web manifest)

Gone on purpose: OneDrive sync, tabs, encoding pickers, CRLF/LF dialogs, font
pickers, Copilot.

Keyboard: `Ctrl+S` save, `Ctrl+O` open, `Ctrl+Z`/`Ctrl+Y` undo/redo.

## How it's hosted

Pushing to `main` triggers `.github/workflows/pages.yml`, which publishes the
repo root to GitHub Pages. **One-time setup:** in the repo, go to
*Settings → Pages → Build and deployment → Source* and select **GitHub Actions**.
