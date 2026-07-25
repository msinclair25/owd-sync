# OWD Sync

OWD Sync is the companion Obsidian plugin for
[OWD Platform](https://github.com/msinclair25/owd-platform). It connects the
vault you explicitly opened to an owner-controlled OWD deployment for sync,
search, encrypted snapshots, and recovery.

> **Invited family test:** OWD Sync `0.1.2` is available through BRAT while its
> Obsidian Community Plugins review is pending. The invited tester first
> deploys the private OWD Platform fork from its
> [trusted-tester start page](https://github.com/msinclair25/owd-platform/blob/main/docs/TRUSTED-TESTER-START.md).

## Install the invited test candidate

1. Complete and claim the tester-owned OWD Platform deployment.
2. In **Vault connections**, open **Trusted tester · one temporary step**.
3. Install and enable
   [BRAT](https://github.com/TfTHacker/obsidian42-brat) from Obsidian's
   Community Plugins.
4. Use the dashboard action to add `msinclair25/owd-sync`, then confirm
   Obsidian shows version `0.1.2`. Stop if it differs.
5. Enable **OWD Sync** under **Settings → Community plugins**.

BRAT installs and updates the published GitHub Release. No terminal or hidden
vault-folder work is required for this invited path.

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

## Diagnostic package

Download `owd-sync-<version>.zip` and `checksums.txt` from the matching
[OWD Sync 0.1.2 GitHub Release](https://github.com/msinclair25/owd-sync/releases/tag/0.1.2).
Verify the checksum, then install the complete `owd-sync` directory as one
version-matched unit. Do not mix `main.js`, `manifest.json`, or `styles.css`
from different releases. If BRAT is blocked, stop the acceptance run. The ZIP
is for separate maintainer diagnosis, not a substitute installation path.

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

The OWD adapter is Apache-2.0. Vendored YAOS components retain their 0BSD
notice and provenance.
