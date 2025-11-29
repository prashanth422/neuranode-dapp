import React from "react";
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Payment Page</h2>
      <p>Send ADA (UI will be added later)</p>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}
