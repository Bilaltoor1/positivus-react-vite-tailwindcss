import React from 'react'
import bombIllustration from '../assets/bomb.svg'
const LetsMakeHappen = () => {
  return (
    <div className='rounded-[40px] md:h-[350px] bg-[#f3f3f3] px-[30px] md:px-[60px] grid grid-cols-1 md:grid-cols-2 mt-[100px]'>
        <div className='py-[60px] w-full'>
            <h3 className='font-bold text-[30px]'>Let’s make things happen</h3>
            <p className='text-[18px] mt-4'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <button className='text-[18px] text-white mt-4 rounded-lg bg-black-light px-4 py-2'>Get your free proposal</button>
        </div>
        <div className='mt-[-20px] md:flex hidden ml-6  justify-end'>
            <img src={bombIllustration} alt="bomb" />
        </div>
    </div>
  )
}

export default LetsMakeHappen