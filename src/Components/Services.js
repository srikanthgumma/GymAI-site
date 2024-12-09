import React from 'react'
import { services } from '../Data/Data'

const Services = () => {
  return (
    <section id='services' className=' w-full min-h-screen bg-transparent max-lg:bg-center max-sm:bg-center'>
      <div className=' max-container p-3'>
        <div className='flex justify-between items-center mb-28 max-lg:flex-col max-lg:items-start max-lg:gap-5 max-sm:mb-20'>
          <h2 className='text-white text-5xl font-sans font-bold m-auto'>Services</h2>
        </div>
        <div className=' grid grid-cols-3 cursor-pointer gap-10 place-items-center overflow-hidden max-lg:grid-cols-2 max-sm:grid-cols-1'>
          {services.map((val) => (
            <div key={val.label}
              className="flex flex-col items-center aspect-auto p-4 sm:p-8 border  transition duration-300 hover:translate-x-4 rounded-3xl bg-gradient-to-br from-blue-600 to-black  border-gray-700 group shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
              <h2 className="text-6xl sm:text-6xl font-medium text-white m-20"> {val.icon}</h2>

              <ul className="list-none list-inside mb-6 text-center text-gray-300">
                <li className="font-bold text-white font-sans italic text-2xl "> {val.label}</li>
                <li className='font-sans text-center flex-nowrap text-sm mt-6'>  {val.desc}</li>
              </ul>
              <a target="_blank" rel="noopener noreferrer"
                class="lemonsqueezy-button relative flex h-9 w-full items-center  -bottom-16 opacity-0 group-hover:bottom-0 group-hover:opacity-[1] duration-300 left-0 justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                href="#"><span class="relative text-sm font-bold font-sans text-black">{val.btnDec}</span></a>
            </div>

          ))}
        </div>
      </div>
    </section>
  )
}


export default Services