import React, { useState } from 'react'

const TimeSchedule = () => {
  return (
    <section id='schedule' className=' w-full p-4 m-0 '>
      <div className=' max-container'>
        <p className=' text-white text-3xl  font-bold font-sans text-center w-fit m-auto max-sm:before:w-16 max-sm:pl-20  mb-11'>OUR TIME SCHEDULE</p>
        <div className=' grid grid-cols-5 gap-8 w-[88%] mt-6 max-xl:w-[100%] max-lg:grid-cols-2 max-sm:grid-cols-1 m-auto duration-300'>
          <div className={` transform duration-100 hover:translate-y-4 group border rounded-3xl border-blue-600 hover:bg-[#2200ff] hover:rounded-3xl px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
            <p className={`  text-4xl text-blue-500 group-hover:text-white   text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]`}>6am-8am</p>
            <h1 className={` text-white mt-5 group-hover:text-white  font-normal text-3xl`}>Kick Boxing</h1>
            <p className={` text-white group-hover:text-white text-lg`}>by <span className={` text-white group-hover:text-white`}>Jhos Butler</span></p>
          </div>
          <div className={`transform duration-100 hover:translate-y-4 group border rounded-3xl border-blue-600 hover:bg-[#2200ff] hover:rounded-3xl px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
            <p className={`  text-4xl  text-blue-500 group-hover:text-white text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]`}>6am-8am</p>
            <h1 className={` text-white mt-5 group-hover:text-white text-3xl`}>Kick Boxing</h1>
            <p className={` text-white group-hover:text-white text-lg`}>by <span className={` text-white group-hover:text-white`}>Jhos Butler</span></p>
          </div>
          <div className={`transform duration-100 hover:translate-y-4 group border rounded-3xl border-blue-600 hover:bg-[#2200ff] hover:rounded-3xl px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
            <p className={`  text-4xl text-blue-500 group-hover:text-white text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]`}>6am-8am</p>
            <h1 className={` text-white mt-5 group-hover:text-white text-3xl`}>Kick Boxing</h1>
            <p className={` text-white group-hover:text-white text-lg`}>by <span className={` text-white group-hover:text-white`}>Jhos Butler</span></p>
          </div>
          <div className={` transform duration-100 hover:translate-y-4 group border rounded-3xl border-blue-600 hover:bg-[#2200ff] hover:rounded-3xl px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
            <p className={`  text-4xl text-blue-500 group-hover:text-white text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]`}>6am-8am</p>
            <h1 className={` text-white mt-5 group-hover:text-white text-3xl`}>Kick Boxing</h1>
            <p className={` text-white group-hover:text-white text-lg`}>by <span className={` text-white group-hover:text-white`}>Jhos Butler</span></p>
          </div>
          <div className={`transform duration-100 hover:translate-y-4 group border rounded-3xl border-blue-600 hover:bg-[#2200ff] hover:rounded-3xl px-6 py-10 text-center h-[250px] max-lg:h-[270px] max-sm:h-[250px]`}>
            <p className={`  text-4xl text-blue-500 group-hover:text-white text-center max-w-[80%] m-auto py-1 mt-4 max-lg:max-w-[35%]`}>6am-8am</p>
            <h1 className={` text-white mt-5 group-hover:text-white text-3xl`}>Kick Boxing</h1>
            <p className={` text-white group-hover:text-white text-lg`}>by <span className={` text-white group-hover:text-white`}>Jhos Butler</span></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimeSchedule