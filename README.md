# Rewritten in KBs — Microsoft Edition

Rewriting modern Microsoft applications: same functionality, a fraction of the
size. Each episode strips an app down to the features people actually use and
rebuilds it in kilobytes of dependency-free vanilla web code.

One folder per episode.

## Episodes

| # | App | Size | Live | Source | Post |
|---|-----|------|------|--------|------|
| 1 | **Notepad** | 4.94 KB (55× smaller than the 274 KB `.exe`) | [open](https://ollielarkins.github.io/RewrittenInKBs-MicrosoftEdition/notepad/) | [`/notepad`](notepad/) | [read](https://medium.com/@info.oliverlarkins/rewritten-in-kbs-microsoft-notepad-a-pilot-episode-020255aff0b1) |

## Hosting

The whole repo is published with GitHub Pages straight from `main` — no build
step, no workflow. `.nojekyll` (at the repo root) tells Pages to serve the files
as-is. Each episode is reachable at `…github.io/RewrittenInKBs-MicrosoftEdition/<folder>/`.

**One-time setup:** *Settings → Pages → Build and deployment* → **Source:
Deploy from a branch** → **`main`** / **`/ (root)`** → Save. Every push to
`main` republishes automatically.
