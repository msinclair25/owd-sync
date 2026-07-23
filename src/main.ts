import { Notice, requestUrl } from "obsidian";
import VaultCrdtSyncPlugin from "../vendor/yaos-src/main";
import {
  OwdPairingError,
  pairOwdVault,
  parseOwdPairingLink,
  type OwdConnection,
} from "./pairing-contract";
import { confirmOwdPairing, promptForOwdPairingLink } from "./pairing-modal";

export default class OwdSyncPlugin extends VaultCrdtSyncPlugin {
  override async onload(): Promise<void> {
    await super.onload();

    this.addCommand({
      id: "pair-this-vault",
      name: "Pair this vault with OWD",
      callback: () => this.startOwdPairing(),
    });
  }

  override startOwdPairing(): void {
    const vaultName = this.app.vault.getName();
    promptForOwdPairingLink(this.app, vaultName, (link) => {
      void this.handleOwdPairing(link);
    });
  }

  private async handleOwdPairing(link: string): Promise<void> {
    try {
      const outcome = await pairOwdVault(
        parseOwdPairingLink(link),
        this.app.vault.getName(),
        this.manifest.version,
        {
          applyConnection: (connection) => this.applyConnection(connection),
          confirm: (consent) => confirmOwdPairing(this.app, consent),
          request: async (request) => {
            const response = await requestUrl({ ...request, throw: false });
            return { json: response.json, status: response.status };
          },
        },
      );

      if (outcome === "cancelled") {
        new Notice(
          "OWD pairing cancelled. No connection settings were changed.",
          6000,
        );
      }
    } catch (error: unknown) {
      new Notice(
        error instanceof OwdPairingError
          ? error.message
          : "OWD pairing could not be completed. Generate a new link and try again.",
        8000,
      );
    }
  }

  private async applyConnection(connection: OwdConnection): Promise<void> {
    await this.applyOwdConnection({
      host: connection.host,
      token: connection.token,
      vaultId: connection.vaultId,
    });
  }
}
