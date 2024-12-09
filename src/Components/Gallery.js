import React from 'react'
import pic1 from '../assets/img-10.jpg'
import pic2 from '../assets/img-11.jpg';
import pic3 from '../assets/img-13.jpg';
import pic4 from '../assets/img-14.jpg';
import pic5 from '../assets/img-15.jpg';
import pic6 from '../assets/img-16.jpg';
import pic7 from '../assets/img-17.jpg';
import pic8 from '../assets/img-18.jpg';

const Gallery = () => {
  return (
    <section id='gallery' className='  w-full flex flex-col '>
      <h2 className='sm:text-5xl font-sans font-bold  text-white text-center text-3xl mt-28'>Image Gallery</h2>
      <div className="h-screen w-full flex items-center justify-center overflow-hidden bg-transparent">
        <div className="relative lg:w-[290px] lg:h-[290px] md:w-[220px] md:h-[220px] sm:w-[220px] sm:h-[220px] w-[100px] h-[100px] [transform-style:preserve-3d] animate-[rotate_30s_linear_infinite]">
          <span style={{ '--i': 1 }} className="span-style"><img src={pic1} alt="img - 1" className="img-style" /></span>
          <span style={{ '--i': 2 }} className="span-style"><img src={pic2} alt="img - 2" className="img-style" /></span>
          <span style={{ '--i': 3 }} className="span-style"><img src={pic3} alt="img - 3" className="img-style" /></span>
          <span style={{ '--i': 4 }} className="span-style"><img src={pic4} alt="img - 4" className="img-style" /></span>
          <span style={{ '--i': 5 }} className="span-style"><img src={pic5} alt="img - 5" className="img-style" /></span>
          <span style={{ '--i': 6 }} className="span-style"><img src={pic6} alt="img - 6" className="img-style" /></span>
          <span style={{ '--i': 7 }} className="span-style"><img src={pic7} alt="img - 7" className="img-style" /></span>
          <span style={{ '--i': 8 }} className="span-style"><img src={pic8} alt="img - 8" className="img-style" /></span>
        </div>
      </div>
    </section>
  )
}

export default Gallery