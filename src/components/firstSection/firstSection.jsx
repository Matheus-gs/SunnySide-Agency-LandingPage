import React from "react";
import "./firstSection.css";

import firstSectionImage from "../../images/desktop/image-transform.jpg";

export default function FirstSection() {
  return (
    <section id="firstSection">
      <div id="firstSectionContent">
        <div className="content">
          <h2>Transform your brand</h2>

          <p>
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through
            compelling visuals that do most of the marketing for you.
          </p>

          <a href="#">Learn more</a>
        </div>
      </div>

      <img id="firstSectionImg" src={firstSectionImage} alt="" />
    </section>
  );
}
