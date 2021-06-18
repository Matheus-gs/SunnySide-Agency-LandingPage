import React from "react";

import "./thirdSection.css";

import ThirdSectionLeftImage from "../../images/desktop/image-graphic-design.jpg";
import ThirdSectionRightImage from "../../images/desktop/image-photography.jpg";

export default function ThirdSection() {
  return (
    <section id="thirdSection">
      <div id="thirdSectionLeftContent">
        <img id="thirdSectionLeftImg" src={ThirdSectionLeftImage} alt="" />
        <div className="content">
          <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that underscores your brand message and captures
            potential clients’ attention.
          </p>
        </div>
      </div>
      <div id="thirdSectionRightContent">
        <img id="thirdSectionRightImg" src={ThirdSectionRightImage} alt="" />
        <div className="content">
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality photos that improve your business
            image.
          </p>
        </div>
      </div>
    </section>
  );
}
