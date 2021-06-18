import React from "react";

import "./fifthSection.css";

import FirstImg from "../../images/desktop/image-gallery-milkbottles.jpg";
import SecondImg from "../../images/desktop/image-gallery-orange.jpg";
import ThirdImg from "../../images/desktop/image-gallery-cone.jpg";
import FourthImg from "../../images/desktop/image-gallery-sugarcubes.jpg";

export default function FifthSection() {
  return (
    <section id="fifthSection">
      <div className="fifthSectionImg">
        <img src={FirstImg} alt="" />
      </div>
      <div className="fifthSectionImg">
        <img src={SecondImg} alt="" />
      </div>
      <div className="fifthSectionImg">
        <img src={ThirdImg} alt="" />
      </div>
      <div className="fifthSectionImg">
        <img src={FourthImg} alt="" />
      </div>
    </section>
  );
}
