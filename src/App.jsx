import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import React from 'react'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import Aos from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Navbar/>
        <div className="container">
          <Home />
          <About />
          {/* <Experience /> */}
          <Skills />
          <Projects />
        </div>
      <Footer/>
    </>
  )
}

export default App

