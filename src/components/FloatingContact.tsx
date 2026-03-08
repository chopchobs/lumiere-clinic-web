import React from 'react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-100 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* ป้ายข้อความเล็กๆ ดึงดูดสายตา (จะซ่อนในมือถือเพื่อไม่ให้บังจอ) */}
      <div className="hidden md:flex bg-white px-4 py-2 rounded-xl shadow-lg border border-stone-100 items-center gap-2 pointer-events-auto animate-bounce">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B76E79] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B76E79]"></span>
        </span>
        <span className="text-stone-600 font-medium text-sm">ปรึกษาแพทย์ฟรี!</span>
      </div>

      {/* ปุ่ม LINE */}
      <a 
        href="https://line.me/ti/p/~@yourclinic" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 md:w-18 md:h-18 bg-[#00B900] hover:bg-[#009900] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(0,185,0,0.4)] hover:shadow-[0_10px_35px_rgba(0,185,0,0.6)] transition-all duration-300 hover:-translate-y-1 pointer-events-auto group"
      >
        {/* โลโก้ LINE SVG (ขนาดใหญ่เห็นชัด) */}
        <svg className="w-9 h-9 md:w-10 md:h-10 transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.266 8.846 8.169 9.601.319.068.756.216.864.494.098.249.031.636.015.89-.021.32-.132 1.579-.16 1.889-.034.375-.164.79.529.5 1.053-.44 5.672-3.344 7.954-5.881 2.375-2.637 3.629-5.467 3.629-7.493z" />
        </svg>
      </a>

    </div>
  );
};

export default FloatingContact;