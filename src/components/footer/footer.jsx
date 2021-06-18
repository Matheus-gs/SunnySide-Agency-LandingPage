import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div id="footerContent">
        <h1>sunnyside</h1>
        <ul className="footerLinks">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>

        <ul className="footerSocialMediaLinks">
          <li>
            <a href="#">
              {" "}
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              {" "}
              <FaPinterest />
            </a>
          </li>
        </ul>
      </div>

      <p id="by">
        &copy;2021 - <a href="https://github.com/matheus-gs">Matheus-gs</a>
      </p>
    </footer>
  );
}
