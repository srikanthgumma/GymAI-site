import React from 'react'
import { teamMembers } from '../Data/Data'

import { BiLogoFacebook } from "react-icons/bi"
import { BsTwitter } from "react-icons/bs"
import { FaGlobe } from "react-icons/fa6"
import { BsInstagram } from "react-icons/bs"

const TeamMembers = () => {
  return (
    <section className=' w-full mb-32 bg-transparent'>
      <div className=' max-container p-10'>
        <h2 className='text-3xl font-sans font-bold text-white text-center mb-16'>Team Members</h2>
        <div className=' grid grid-cols-3 gap-10 max-lg:grid-cols-2 justify-center items-center max-lg:gap-5 max-sm:grid-cols-1'>
          {teamMembers.map((val) => (
            <div key={val.name} className='group relative overflow-hidden'>
              <img src={val.img} alt="TeamMembers" className=' w-full h-full object-cover max-sm:h-[65vh] rounded-full' />
              <div className='absolute rounded-full bottom-[-68px] duration-[.4s] group-hover:bottom-0 left-0 text-center w-full group-hover:bg-blue-950 p-7 pb-8'>
                <p className=' font mb-2 text-gray-300 relative before:absolute  before:h-1 before:bg-blue-900 before:top-[50%] before:left-0 text-lg before:translate-y-[-50%] group-hover:text-white group-hover:before:bg-white'>{val.role}</p>
                <h1 className='font text-xl font-semibold text-white'>{val.name}</h1>
                <div className=' flex items-center gap-6 text-lg mt-[29px] justify-center text-white'>
                  <BiLogoFacebook size={28} />
                  <BsTwitter size={28} />
                  <FaGlobe size={28} />
                  <BsInstagram size={28} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TeamMembers