import { Lucid, Blockfrost } from "lucid-cardano";

const BLOCKFROST_KEY = process.env.REACT_APP_BLOCKFROST_KEY;
const NETWORK = process.env.REACT_APP_NETWORK || "Preprod";

let lucidInstance = null;

export async function initLucidAndWallet() {
  if (!window.cardano) {
    throw new Error("No Cardano wallet found. Install Nami.");
  }

  const provider =
    window.cardano.nami ||
    window.cardano.eternl ||
    window.cardano.lace;

  if (!provider) {
    throw new Error("No supported wallet installed.");
  }

  const walletApi = await provider.enable();

  const blockfrost = new Blockfrost(
    `https://cardano-preprod.blockfrost.io/api/v0`,
    BLOCKFROST_KEY
  );

  const lucid = await Lucid.new(blockfrost, NETWORK);
  lucid.selectWallet(walletApi);

  const address = await lucid.wallet.address();

  lucidInstance = lucid;

  return { lucid, address };
}

export function getLucid() {
  if (!lucidInstance) {
    throw new Error("Lucid not initialized!");
  }
  return lucidInstance;
}
