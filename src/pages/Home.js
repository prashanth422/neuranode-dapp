import React from "react";
import { Link } from "react-router-dom";
import WalletConnect from "../components/WalletConnect";

export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>NeuraNode Payment DApp</h1>
      <p>Welcome — Connect wallet and start using the DApp.</p>

      {/* Wallet Connect Button */}
      <WalletConnect />

      <br /><br />
      <Link to="/payment">
        <button>Go to Payment</button>
      </Link>
    </div>
  );
}
