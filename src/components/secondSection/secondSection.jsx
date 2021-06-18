import React from "react";

import "./secondSection.css";
import secondSectionImage from "../../images/desktop/image-stand-out.jpg";

export default function SecondSection() {
  return (
    <section id="secondSection">

      <img id="secondSectionImg" src={secondSectionImage} alt="" />
      
      <div id="secondSectionContent">
        <div className="content">
          <h2>Stand out to the right audience</h2>

          <p>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters,
            we’ll build and extend your brand in digital places.
          </p>

          <a href="#"> Learn more</a>
        </div>
      </div>
    </section>
  );
}
