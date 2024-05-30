import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'

const Skills = () => {
  return (
    <div className=' border border-gray-600 bg-black text-gray-400 md:h-[150px] max-w-[1400px] mx-auto grid grid-cols-6 place-items-center md:flex md:justify-between md:items-center'>
      <h2 className='text-gray-700 text-xl md:text-4xl font-bold m-4' id='skills'>
        Skills

      </h2>
      {/* adding pic with the text for each pic using flex*/}
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={html} alt="" />
        <p className='mt-2'>HTML</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={css} alt="" />
        <p className='mt-2'>Css</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={javascript} alt="" />
        <p className='mt-2'>Javascript</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={tailwind} alt="" />
        <p className='mt-2'>Tailwind</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
        <img src={react} alt="" />
        <p className='mt-2'>React</p>
      </div>
    </div>
  )
}

export default Skills