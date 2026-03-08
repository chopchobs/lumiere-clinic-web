const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      
      {/* รูปภาพพื้นหลัง */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
          alt="Lumiere Clinic Experience"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay ย้อมสีภาพให้มีกลิ่นอายความอุ่น (Warm/Rose tint) นิดๆ เพื่อให้เข้ากับธีม */}
        <div className="absolute inset-0 bg-stone-900/30"></div>
        <div className="absolute inset-0 bg-linear-to-b from-[#B76E79]/20 to-stone-900/50"></div>
      </div>

      {/* เนื้อหาตรงกลาง */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        
        {/* หัวข้อเล็กด้านบน (สีโรสโกลด์สว่าง) */}
        <p className="text-[#E4C5C4] font-light tracking-[0.3em] text-sm md:text-base mb-4 uppercase">
          Discover Your True Beauty
        </p>
        
        {/* หัวข้อหลัก */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#FDFBF7] mb-6 leading-tight">
          Elevate Your <br />
          <span className="italic font-light text-[#E4C5C4]">Elegance</span>
        </h1>

        {/* คำบรรยาย (สีครีม) */}
        <p className="text-[#FDFBF7]/90 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          เผยผิวสวยและกรอบหน้าคมชัดในแบบที่เป็นคุณ ที่ LUMIÈRE Clinic 
          พร้อมดูแลทุกรายละเอียดด้วยนวัตกรรมความงามระดับโลก
        </p>

        {/* กลุ่มปุ่มกด */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* ปุ่มหลัก: โรสโกลด์ */}
          <a href="#programs" className="w-full sm:w-auto bg-[#B76E79] hover:bg-[#A35D6A] text-white px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg shadow-[#B76E79]/30">
            ดูโปรแกรมการรักษา
          </a>
          {/* ปุ่มรอง: ครีมโปร่งใส ขอบครีม */}
          <a href="#consult" className="w-full sm:w-auto bg-transparent border border-[#FDFBF7] text-[#FDFBF7] hover:bg-[#FDFBF7] hover:text-[#B76E79] px-10 py-4 rounded-full font-medium text-lg transition-all duration-300">
            ปรึกษาแพทย์ผู้เชี่ยวชาญ
          </a>
        </div>

      </div>

      {/* ไอคอนเลื่อนลง (Scroll Down) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce flex flex-col items-center">
        <span className="text-[#E4C5C4] text-xs font-light tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-[#E4C5C4]/50"></div>
      </div>

    </section>
  );
};

export default Hero;