# OWD Sync

OWD Sync is the companion Obsidian plugin for
[OWD Platform](https://github.com/msinclair25/owd-platform). It connects the
vault you explicitly opened to an owner-controlled OWD deployment for sync,
search, encrypted snapshots, and recovery.

> **Live private beta:** OWD Sync `0.1.2` is available now through BRAT and as
> a version-matched ZIP. It is not yet listed in Obsidian's official Community
> Plugin directory. Submission follows successful owner and invited-family
> testing of installation, updates, pairing, sync, backup, recovery,
> desktop/mobile compatibility, and rollback.

## Start here: install the private beta

You need a claimed OWD Platform deployment before pairing a vault. OWD Platform
is the application; this repository distributes only its Obsidian companion.

1. Install and enable
   [BRAT](https://github.com/TfTHacker/obsidian42-brat) from Obsidian's
   Community Plugins.
2. In BRAT, add `https://github.com/msinclair25/owd-sync`. If your authenticated
   OWD dashboard shows **Private beta installer**, its
   **Install OWD Sync beta** action launches this same BRAT flow.
3. Enable **OWD Sync** under **Settings → Community plugins**.

BRAT installs and updates the published GitHub Release. No terminal or hidden
vault-folder work is required for the normal private-beta path.

BRAT is a testing bridge, not the permanent distribution plan. OWD Sync will
move to Obsidian's official Community Plugin directory after the private-beta
compatibility, security, mobile, update, and clean-install gates pass.

## Pair one vault safely

1. In the authenticated OWD dashboard, create and copy a private pairing link.
2. Open the exact vault you intend to connect.
3. Run **OWD Sync: Pair this vault with OWD** from that vault's command palette.
4. Paste the link and confirm the displayed current vault name, deployment
   host, and access disclosure.

The browser link cannot open or choose an Obsidian vault. Pairing begins inside
the vault the owner already selected, uses a ten-minute single-use grant, and
does not expose the stored vault credential in the dashboard.

## ZIP fallback

Download `owd-sync-<version>.zip` and `checksums.txt` from the matching
[GitHub Release](https://github.com/msinclair25/owd-sync/releases/latest).
Verify the checksum, then install the complete `owd-sync` directory as one
version-matched unit. Do not mix `main.js`, `manifest.json`, or `styles.css`
from different releases. The ZIP is a supported manual fallback when BRAT is
unavailable, not the normal beta installation path.

## Development

OWD Sync is developed in the OWD Platform monorepo and promoted to this
sanitized public distribution repository. The repository contains the
reviewable adapter, pinned upstream client source and notices, tests, build
configuration, and release assets.

```sh
pnpm install
pnpm typecheck
pnpm test
pnpm build
```

See [UPSTREAM.md](UPSTREAM.md) for pinned YAOS provenance and
[SECURITY.md](SECURITY.md) for vulnerability reporting and the pairing trust
boundary.

## License

The OWD adapter is Apache-2.0 under [LICENSE](LICENSE). Vendored YAOS
components retain their complete 0BSD terms in
[LICENSE-UPSTREAM](LICENSE-UPSTREAM) and their provenance in
[UPSTREAM.md](UPSTREAM.md).
