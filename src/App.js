import React, { useState } from 'react'
import Nav from './Components/Nav'
import About from './Components/About'
import Services from './Components/Services'
import Client from './Components/Client'
import Gallery from './Components/Gallery'
import TeamMembers from './Components/TeamMembers'
import TimeSchedule from './Components/TimeSchedule'
import Footer from './Components/Footer'
import HeroSection from './Components/HeroSection'

const App = () => {
  const [nav, setNav] = useState(false)
  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop
    if (scroll > 305) {
      setNav(true)
    }
    else {
      setNav(false)
    }
  })

  return (
    <div className='App'>
      <Nav nav={nav} />
      <HeroSection />
      <Services />
      <Client />
      <Gallery />
      <TeamMembers />
      <TimeSchedule />
      <About />
      <Footer nav={nav} />
    </div>
  )
}

export default App