import React, { useState } from 'react'

const Navbar = () => {
  const[navbar,setnavbar]=useState(false);

  const changeBackground=()=>{
    if(window.scrollY >=50){
      setnavbar(true)
    }else{
      setnavbar(false)
    }
  }

  window.addEventListener("scroll",changeBackground)
  return (
    <>
      <div className={navbar ? "nav_bar active" : "nav_bar"}
      data-aos="fade-down"
      data-aos-duration="1000">
        <div className="left "><a href="#home" className="nav_items">Gopal Choudhary</a></div>
        <div className="right">
          <a href="#about" className="nav_items">About</a>
          {/* <a href="#experience" className="nav_items">Experience</a> */}
          <a href="#skills" className="nav_items">Skills</a>
          <a href="#projects" className="nav_items">Projects</a>
          <a href="#contact" className="nav_items">Contact</a>
        </div>
      </div>
    </>
  )
}

export default Navbar
