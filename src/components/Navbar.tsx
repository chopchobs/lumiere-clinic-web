'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-sm py-4' // สีครีมตอนเลื่อนลง
          : 'bg-transparent py-6' // โปร่งใสตอนอยู่บนสุด
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* โลโก้ */}
        <div className={`text-2xl tracking-widest font-serif transition-colors duration-300 ${
          isScrolled ? 'text-[#B76E79]' : 'text-white' // โรสโกลด์เข้ม หรือ ขาว
        }`}>
          LUMIÈRE
        </div>
        
        {/* เมนู */}
        <div className={`hidden md:flex gap-8 font-light text-sm tracking-wide transition-colors duration-300 ${
          isScrolled ? 'text-stone-500' : 'text-[#FDFBF7]/90' // เทาตุ่นๆ หรือ ครีมสว่าง
        }`}>
          <a href="#about" className="hover:text-[#B76E79] transition-colors">ABOUT</a>
          <a href="#services" className="hover:text-[#B76E79] transition-colors">TREATMENTS</a>
          <a href="#reviews" className="hover:text-[#B76E79] transition-colors">REVIEWS</a>
        </div>

        {/* ปุ่มจองคิว */}
        <button className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#B76E79] text-white hover:bg-[#A35D6A] shadow-md shadow-[#B76E79]/20' // ปุ่มสีโรสโกลด์
            : 'bg-[#FDFBF7] text-[#B76E79] hover:bg-[#B76E79] hover:text-white' // ปุ่มสีครีม ตัวหนังสือโรสโกลด์
        }`}>
          Book Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;