import React from 'react'
import Navbar from './Components/navbar/navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/contact'
import Achievement from './Components/Achievements/achievement'



const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects/>
      <Skills />
      <Achievement/>
      <Contact />
    </div>
  )
}

export default App
