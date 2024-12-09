import React from 'react'

const About = () => {
  return (
    <section id='about' className=' w-screen mb-40 bg-transparent mt-60 '>
      <div className=' max-container w-full mx-auto flex  flex-col justify-center content-center items-center gap-24  max-xl:gap-7 max-lg:flex-col'>
        <div className='w-full justify-center  items-center'>
          <h2 className='text-white text-4xl font-sans font-bold text-center mb-12'>Contact Us</h2>
          <form className="px-4  max-w-full">
            <div className="mx-auto max-w-full w-full lg:mr-0 lg:max-w-full">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label for="first-name" className="block text-sm font-semibold leading-6 text-white font-sans">First name</label>
                  <div className="mt-2.5">
                    <input type="text" id="first-name" placeholder='Enter your first name' autocomplete="given-name" className="font-sans block w-full rounded-md border-0 px-3.5 py-4 bg-blue-950 text-white shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="firstName" />
                  </div>
                </div>
                <div>
                  <label for="last-name" className="block text-sm font-semibold leading-6 text-white font-sans">Last name</label>
                  <div className="mt-2.5">
                    <input type="text" id="last-name" placeholder='Enter your last name' autocomplete="family-name" className="font-sans block w-full rounded-md border-0 px-3.5 bg-blue-950  py-4 text-white shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="lastName" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label for="email" className="block text-sm font-semibold leading-6 text-white font-sans">Email</label>
                  <div className="mt-2.5">
                    <input type="email" id="email" placeholder='Enter your Email' autocomplete="email" className="font-sans block w-full rounded-md border-0 px-3.5 py-4 bg-blue-950 text-white shadow-sm ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label for="message" className="block text-sm font-semibold leading-6 text-white font-sans">Message</label>
                  <div className="mt-2.5">
                    <textarea id="message" rows="4" placeholder='Write your message...' className="font-sans block w-full rounded-md border-0 px-3.5 py-4 text-white shadow-sm ring-1 ring-inset bg-blue-950 ring-blue-300 placeholder:text-blue-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="message"></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button type="submit" className="w-max  rounded-2xl border-2 border-[#0057ff] bg-[#0057ff]  px-5 py-1.5 text-sm font-semibold text-white font-sans transition-colors duration-150 ease-in-out hover:border-blue-400 hover:bg-blue-400">Send message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default About