import React from 'react';
import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='w-4/5 m-auto p-10'>
      <div className='md:flex grid grid-cols-1 justify-between items-start my-10 gap-y-5 md:gap-y-0'>
        <div className='space-y-5 py-5 border-b text-center md:text-left'>
          <h1 className='text-3xl font-bold'>E-commerce</h1>
          <div className='flex justify-center md:justify-start space-x-5'>
            <AiOutlineInstagram size={"1.5rem"}></AiOutlineInstagram>
            <AiOutlineWhatsApp size={"1.5rem"}></AiOutlineWhatsApp>
            <AiOutlineYoutube size={"1.5rem"}></AiOutlineYoutube>
          </div>
        </div>
        <div className='flex flex-col space-y-3  text-center md:text-left'>
          <h1>Company</h1>
          <a className='text-sm text-gray-400' href="/">About Us</a>
          <a className='text-sm text-gray-400' href="/">Contac Us</a>
          <a className='text-sm text-gray-400' href="/">Services</a>
          <a className='text-sm text-gray-400' href="/">Blog</a>
        </div>
        <div className='flex flex-col space-y-3  text-center md:text-left'>
        <h1>Company</h1>
          <a className='text-sm text-gray-400' href="/">About Us</a>
          <a className='text-sm text-gray-400' href="/">Contac Us</a>
          <a className='text-sm text-gray-400' href="/">Services</a>
          <a className='text-sm text-gray-400' href="/">Blog</a>
        </div>
        <div className='flex flex-col space-y-3  text-center md:text-left'>
        <h1 className='flex flex-col space-y-3 sm:space-y-5'>Company</h1>
          <a className='text-sm text-gray-400' href="/">About Us</a>
          <a className='text-sm text-gray-400' href="/">Contac Us</a>
          <a className='text-sm text-gray-400' href="/">Services</a>
          <a className='text-sm text-gray-400' href="/">Blog</a>
        </div>
      </div>
      <div className='border-t py-2'>
        <p className='text-center md:text-left'>copy &copy;2024 <span className='font-bold'>E-commerce</span> All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;