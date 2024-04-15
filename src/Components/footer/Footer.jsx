import React from "react";
import "./Footer.css";
import { SiMedium } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";

function Footer() {
  return (
    <footer id="footer">
      {/* <a href="#" className='footer__logo'>ARJUN</a> */}

      <ul className="permalinks">
        <li>
          {" "}
          <a href="#home">Home</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#about">About</a>{" "}
        </li>
        <li>
          {" "}
          <a href="#education">Education</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://github.com/abhishekhajare6399"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-hajare-64a7ba20a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMedium />
        </a>
        <a
          href="https://www.instagram.com/abhishekshirishhajare18/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        {/* <small>&copy; Design & Develope by Viraj Hole.</small> */}
        <small>&copy; 2024 Abhishek Shirish Hajare | All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
