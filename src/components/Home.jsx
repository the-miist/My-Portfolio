import React, { useRef, useState } from "react";
import pdf from "../pdf/GopalChoudhary.pdf";
import hero from "./Data/hero.json";
import { useEffect } from "react";
import Typed from "typed.js"

const Home = () => {
  const [src, setsrc] = useState(hero.imgSrc2);
  useEffect(() => {
    const options = {
      strings: ['Welcome Everyone,', 'Welcome To My Creative Realm :)'],
      typespeed: 100,
      backspeed: 100,
      loop: true,
      smartBackspace: true,
    };
    const typed = new Typed(".typedRef", options)

    return () => {
      typed.destroy();
    };
});

  return (
    <>
      <div className="container home my-3" >
        <div className="left" 
        data-aos="fade-down-right"
        data-aos-duration="1000">
          <h1>Hello,</h1>
          <h1>I'm Gopal Choudhary</h1>
          <h1><span className="typedRef"></span></h1>
          <h4>Full Stack Web Developer</h4>
          <a href={pdf} className="btn btn-warning my-3">
          Hire Me
          </a>
        </div>
        <div className="right"
        data-aos="fade-down-left"
        data-aos-duration="1000">
          <div className="img mx-3">
            <img
              src={`/assets${src}`}
              onMouseOver={() => {
                setsrc(hero.imgSrc1);
              }}
              onMouseOut={() => {
                setsrc(hero.imgSrc2);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
