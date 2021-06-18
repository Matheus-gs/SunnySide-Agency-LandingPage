import React from "react";

import "./fourthSection.css";

import ProfileImgEmily from "../../images/image-emily.jpg";
import ProfileImgThomas from "../../images/image-thomas.jpg";
import ProfileImgJennie from "../../images/image-jennie.jpg";

export default function FourthSection() {
  return (
    <section id="fourthSection">
      <div id="clientTestimonials">
        <h2>CLIENT TESTIMONIALS</h2>

        <div id="clientCards">
          <div className="card">
            <div className="cardImage">
              <img src={ProfileImgEmily} alt="" />
            </div>

            <p>
              We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always
              hit.
            </p>

            <div className="clientDescription">
              <h4>Emily R.</h4>
              <p>Marketing Director</p>
            </div>
          </div>

          <div className="card">
            <div className="cardImage">
              <img src={ProfileImgThomas} alt="" />
            </div>

            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and
              enjoyable experience.
            </p>

            <div className="clientDescription">
              <h4>Thomas S.</h4>
              <p>Chief Operating Officer</p>
            </div>
          </div>

          <div className="card">
            <div className="cardImage">
              <img src={ProfileImgJennie} alt="" />
            </div>

            <p>
              Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
            </p>

            <div className="clientDescription">
              <h4>Jennie F.</h4>
              <p>Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
