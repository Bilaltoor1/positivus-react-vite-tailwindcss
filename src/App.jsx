import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurServices from './components/OurServices'
import Section from './components/Section'
import LetsMakeHappen from './components/LetsMakeHappen'
import Team from './components/Team'
import Footer from './components/Footer'
import GrowIn from './animation/GrowIn'
import AnimatedItem from './animation/AnimatedItem'
const App = () => {
  return (
    <div className="px-[20px] font-space-grotesk max-w-[1440px] mx-auto lg:pt-[50px] lg:px-[100px]">
      <Navbar />
      <Hero />
      <Section
        heading='Services'
        paragraph='At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:' />
      <OurServices />
      <GrowIn>
        <LetsMakeHappen />
      </GrowIn>
      <Section
        heading='Team'
        paragraph='Meet the skilled and experienced team behind our successful digital marketing strategies' />
      <Team />
        <Footer />
    </div>
  )
}

export default App