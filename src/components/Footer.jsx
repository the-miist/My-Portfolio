import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <>
    <div className="footer" id='contact'>
        <div className="contact-item text-dark">
            <a href='https://github.com/the-miist' className="icons">
            <FaGithub className="icon" />
            </a>
            <a href='https://linkedin.com/in/gopal-m-choudhary' className="icons">
            <FaLinkedin className="icon"/>
            </a>
            <a href='mailto:gopalchoudhary03@gmail.com' className="icons">
            <MdEmail className="icon"/>
            </a>
            <a href='https://www.instagram.com/themollen._.miist?igsh=eWFzbmtrNWJ2eHVu' className="icons">
            <FaInstagram className="icon"/>
            </a>
        </div >
        <div className="rights text-dark">
        <h6  >
        Copyright © Built By Gopal Choudhary-2024. All Rights Reserved.
        </h6>
        </div>
    </div>
    </>
  )
}

export default Footer