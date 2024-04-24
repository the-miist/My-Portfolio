import React from 'react'

const About = () => {
  return (
    <>
    <div className="container" id='about'>
      <h1 className="my-5" style={{display:"flex", justifyContent:"center"}} >About Me</h1>
      <div className="container about my-3">
      <div className="abut-left"
      data-aos="fade-up-right"
      data-aos-duration="1000">
          <div className="abut-img mx-3">
            <img src={`./assets/hero/hero.png`} />
          </div>
        </div>
        <div className="abut-right"
        data-aos="fade-up-left"
        data-aos-duration="1000">
            <h1>A budding enthusiastic Full Stack Developer, passionate about Software development.
                 Seeking to advance a growing tech career as a Software Developer in a competitive environment.
            </h1>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
