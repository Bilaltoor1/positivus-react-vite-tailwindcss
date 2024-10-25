import React, { useState } from 'react';
import Icon from '../assets/Icon.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg'; // Add a close icon for the mobile menu

const Navbar = () => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <div className='flex justify-between items-center py-6 lg:py-0'>
         <div className='flex gap-2 items-center'>
            <img src={Icon} alt="icon" />
            <h2 className='font-semibold text-2xl'>Positivus</h2>
         </div>
         <div className='hidden lg:flex items-center'>
            <ul className='flex items-center gap-[40px] mr-8'>
               <li>
                  <a href="/" className='text-[20px]'>About Us</a>
               </li>
               <li>
                  <a href="/services" className='text-[20px]'>Services</a>
               </li>
               <li>
                  <a href="/use-cases" className='text-[20px]'>Use Cases</a>
               </li>
               <li>
                  <a href="/pricing" className='text-[20px]'>Pricing</a>
               </li>
               <li>
                  <a href="/blog" className='text-[20px]'>Blog</a>
               </li>
            </ul>
            <button className='text-center border rounded-lg border-black py-3 px-4'>Request a quote</button>
         </div>
         <div className='lg:hidden block cursor-pointer' onClick={toggleMobileMenu}>
            <img src={isMobileMenuOpen ? close : menu} alt="menu" />
         </div>
         {isMobileMenuOpen && (
            <div className='lg:hidden fixed z-50 top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center'>
               <img src={close}  alt="close" className='absolute top-6 right-4' onClick={toggleMobileMenu}/>
               <ul className='flex flex-col items-center gap-[20px]'>
                  <li>
                     <a href="/" className='text-[20px]'>About Us</a>
                  </li>
                  <li>
                     <a href="/services" className='text-[20px]'>Services</a>
                  </li>
                  <li>
                     <a href="/use-cases" className='text-[20px]'>Use Cases</a>
                  </li>
                  <li>
                     <a href="/pricing" className='text-[20px]'>Pricing</a>
                  </li>
                  <li>
                     <a href="/blog" className='text-[20px]'>Blog</a>
                  </li>
               </ul>
               <button className='mt-4 text-center border rounded-lg border-black py-3 px-4'>Request a quote</button>
            </div>
         )}
      </div>
   );
}

export default Navbar;