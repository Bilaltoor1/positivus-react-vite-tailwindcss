import React from 'react';
import Icon from '../assets/Icon.svg';
import socialFirst from '../assets/social/1.svg';
import socialSecond from '../assets/social/2.svg';
import socialThird from '../assets/social/4.svg';
import AnimatedItem from '../animation/AnimatedItem';
import SlideInFromLeft from '../animation/SlideInFromLeft';
import SlideInFromRight from '../animation/SlideInFromRight';

const Footer = () => {
    return (
        <AnimatedItem intial='50'>
            <div className='flex flex-col rounded-t-[40px] mt-[100px] p-[40px] md:p-[60px] bg-black-light text-white'>
                <div className='flex flex-col items-center gap-8 md:flex-row  md:justify-between'>
                    <div className='flex gap-2 items-center'>
                        <img src={Icon} alt="icon" className='filter grayscale invert' />
                        <h2 className='font-semibold text-2xl'>Positivus</h2>
                    </div>
                    <div className='flex flex-wrap text-center items-center gap-[40px]'>
                        <a href="/" className='text-[15px] underline'>About Us</a>
                        <a href="/services" className='text-[15px] underline'>Services</a>
                        <a href="/use-cases" className='text-[15px] underline'>Use Cases</a>
                        <a href="/pricing" className='text-[15px] underline'>Pricing</a>
                        <a href="/blog" className='text-[15px] underline'>Blog</a>
                    </div>
                    <div className='flex gap-3'>
                        <img src={socialFirst} alt="fb" className='h-6 w-6' />
                        <img src={socialSecond} alt="fb" className='h-6 w-6' />
                        <img src={socialThird} alt="fb" className='h-6 w-6' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row  justify-between items-center rounded-[30px] mt-8'>
                <SlideInFromLeft>
                <div className='text-white'>
                    <p className='bg-[#B9FF66] inline-block py-1 px-3 text-black rounded-md font-bold'>Contact us:</p>
                    <ul className='mt-4 space-y-2'>
                        <li>Email: info@positivus.com</li>
                        <li>Phone: 555-567-8901</li>
                        <li>Address: 1234 Main St, Moonstone City, Stardust State 12345</li>
                    </ul>
                </div>
                </SlideInFromLeft>
                <SlideInFromRight>
                <div className='bg-[#292A32] gap-4 md:gap-0 py-10 px-8 mt-8 rounded-[8px] flex flex-col md:flex-row items-center space-x-4'>
                    <input
                        type="email"
                        placeholder="Email"
                        className='bg-transparent border border-[#B9FF66] text-white px-4 py-2 rounded-lg focus:outline-none w-full md:w-[250px]'
                    />
                    <button className='bg-[#B9FF66] text-black px-6 py-2 rounded-lg'>Subscribe to news</button>
                </div>
                </SlideInFromRight>
            </div>
                <div className='bg-white w-full h-[1px] my-6 bg-opacity-50'></div>
                <div className='flex md:flex-row flex-col  gap-4'>
                    <p>© 2024 Positivus. All Rights Reserved. developed by Bilal toor</p>
                    <a href="/" className='underline underline-offset-4'>Privacy Policy</a>
                </div>
            </div>
            </AnimatedItem>
    )
}

export default Footer;
