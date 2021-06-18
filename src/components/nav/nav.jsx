import React from "react";

import "./nav.css";

export default function Navbar() {
  return (
    <nav>
      
      <h1 className="logo">sunnyside</h1>

      <ul className="links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <button id="contactBtn">Contact</button>
        </li>
      </ul>
    </nav>
  );
}
