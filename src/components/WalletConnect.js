import React from "react";
import { useWallet } from "../context/WalletContext";

export default function WalletConnect() {
  const { connected, address, loading, error, connectWallet, disconnectWallet } =
    useWallet();

  function short(addr) {
    return addr ? addr.slice(0, 6) + "..." + addr.slice(-6) : "";
  }

  return (
    <div style={{ marginTop: 20 }}>
      {!connected ? (
        <button disabled={loading} onClick={connectWallet}>
          {loading ? "Connecting..." : "Connect Wallet"}
        </button>
      ) : (
        <>
          <p>Connected: {short(address)}</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
