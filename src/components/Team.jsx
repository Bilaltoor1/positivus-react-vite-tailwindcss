import React from 'react'
import Picture from '../assets/Picture.svg'
import SocialIcon from '../assets/Social.svg'
import AnimatedItem from '../animation/AnimatedItem' 

const Team = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[100px]'>
          {  [1,2,3,4,5,6].map((member, index) => (
                <AnimatedItem key={member} delay={index * 0.2}> 
                    <div className='border rounded-[40px] py-[40px] px-[35px] border-black border-b-4'>
                        <div className='flex justify-between'>
                            <div>
                                <img src={Picture} alt="profile" />
                            </div>
                            <div className='flex flex-col p-3 flex-1'>
                                <img src={SocialIcon} alt="profile" className='h-8 w-8 mb-6 self-end' />
                                <div className='text-left'>
                                    <h4 className='font-semibold'>Emily Johnson</h4>
                                    <p className='text-sm'>PPC Manager</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-black h-[1px] w-full'></div>
                        <p className='text-left mt-2 text-sm'>
                            7+ years of experience in project management and team leadership. Strong organizational and communication skills
                        </p>
                    </div>
                </AnimatedItem>
            ))}
        </div>
    )
}

export default Team