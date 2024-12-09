import React from 'react'
import { motion } from 'framer-motion'


const HeroSection = () => {
  
  return (
    <section id='home' className=' w-screen min-h-screen bg-hero-pattern bg-cover bg-fixed bg-left max-sm:bg-center max-lg:bg-center'>
      <motion.div 
      initial={{x:-600, opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{
        duration:1,
        repeatDelay:10,
        repeat:Infinity
      }}
      className=' min-h-screen max-container font-semibold flex justify-center items-start flex-col padding-x overflow-x-hidden'>
        <div className=' my-12 font-sans italic  text-7xl max-lg:text-5xl text-white max-w-[60%] max-xl:max-w-[70%] max-lg:max-w-[80%] max-md:max-w-[100%] max-sm:text-3xl'>
          <h1>BUILD PERFECT BODY SHAPE FOR GOOD LIFE, STAY FIT, BUILD STRONG, HEALTHY LIFE AND PEACE MIND.</h1>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection