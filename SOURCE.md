# Source provenance

OWD Sync is developed in the public OWD Platform monorepo and promoted to this
focused plugin distribution repository.

The current `0.1.7` public source and assets correspond to:

- OWD Platform plugin tag: `owd-sync-v0.1.7`
- source commit: `f56dec9cc9d522a5070717283e24a10d5cf70c5d`
- public release tag: `0.1.7`
- plugin ID: `owd-sync`

The public release uses a tag exactly equal to `manifest.json`'s semantic
version, as required by Obsidian's Community Plugin release contract. The
monorepo's disjoint `owd-sync-v*` tag namespace remains an internal promotion
trigger.

Each public promotion must include the exact source commit in its release
notes, reproduce `main.js` from the committed source and lockfile, run the
bundle safety guard, include both the OWD Apache-2.0 and upstream 0BSD terms,
and publish SHA-256 checksums for all distributed assets.
