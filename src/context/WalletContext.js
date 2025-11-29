import React, { createContext, useContext, useState } from "react";
import { initLucidAndWallet } from "../services/wallet";

const WalletContext = createContext();

export function WalletProvider({ children }) {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState(null);
  const [lucid, setLucid] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function connectWallet() {
    try {
      setLoading(true);
      const { lucid, address } = await initLucidAndWallet();
      setLucid(lucid);
      setAddress(address);
      setConnected(true);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function disconnectWallet() {
    setAddress(null);
    setLucid(null);
    setConnected(false);
  }

  return (
    <WalletContext.Provider
      value={{
        connected,
        address,
        lucid,
        loading,
        error,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  return useContext(WalletContext);
}
