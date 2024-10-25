import React from 'react';
import HeroIllustration from '../assets/Illustration.svg';
import amazon from '../assets/brands/amazon.png';
import zoom from '../assets/brands/zoom.png';
import dribble from '../assets/brands/dribble.png';
import hubspot from '../assets/brands/hubspot.png';
import notion from '../assets/brands/notion.png';
import netflix from '../assets/brands/netflix.png';

const Hero = () => {

    const brands = [
        { src: amazon, alt: 'Amazon' },
        { src: zoom, alt: 'Zoom' },
        { src: dribble, alt: 'Dribble' },
        { src: hubspot, alt: 'HubSpot' },
        { src: notion, alt: 'Notion' },
        { src: netflix, alt: 'Netflix' },
    ];

    return (
        <>
            <div className='flex flex-col sm:flex-row items-start gap-[35px] py-[70px]'>
                <div className='w-full sm:order-2'>
                    <img src={HeroIllustration} alt="hero image" />
                </div>
                <div className='flex flex-col items-start gap-[35px] sm:order-1'>
                    <h2 className='font-semibold text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px]'>Navigating the digital landscape for success</h2>
                    <p className='text-[20px]'>Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
                    <button className='bg-black text-white text-[20px] px-4 py-2 rounded-lg'>Book a consultation</button>
                </div>
            </div>
            <div className='flex gap-4 flex-wrap justify-between'>
                {brands.map((brand, index) => (
                    <img key={index} src={brand.src} alt={brand.alt} className="h-12 w-auto filter grayscale brightness-0" />
                ))}
            </div>
        </>
    );
}

export default Hero;