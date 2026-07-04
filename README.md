# Notepad — Rewritten in KBs (Microsoft Edition)

The pilot episode: Microsoft Notepad, rewritten smaller.

Modern Notepad is ~274KB on disk, ~59MB of RAM to open a text box. This is the
same thing users actually use, in **one HTML file** — no build step, no
dependencies, no server.

## Features (the ones that matter)

- ✅ Edit plaintext
- ✅ Save / open files (native File System Access API, with download/`<input>` fallback)
- ✅ Undo / redo (free — native to the `<textarea>`)
- ✅ Auto-save (LocalStorage — never lose your work)

Everything else — OneDrive sync, tabs, encoding pickers, CRLF/LF dialogs, font
pickers, Copilot — is gone on purpose.

## Run

Open `index.html` in a browser. That's it.

Keyboard: `Ctrl+S` save, `Ctrl+O` open, `Ctrl+Z`/`Ctrl+Y` undo/redo.
