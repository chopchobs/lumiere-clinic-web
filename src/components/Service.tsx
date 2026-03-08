import React from 'react';

const Service = () => {
  const treatments = [
    {
      id: 'botox',
      title: 'Botulinum Toxin',
      subtitle: 'ลดเลือนริ้วรอย ปรับรูปหน้า',
      description: 'คืนความอ่อนเยาว์อย่างเป็นธรรมชาติ ลดเลือนริ้วรอยจากการแสดงอารมณ์ พร้อมปรับกรอบหน้าให้เรียวสวยมีมิติ โดยแพทย์ผู้เชี่ยวชาญ',
      image: 'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&w=1887&auto=format&fit=crop', // รูปแนว Beauty/Skin
      link: '#botox-detail'
    },
    {
      id: 'filler',
      title: 'Dermal Fillers',
      subtitle: 'เติมเต็มร่องลึก ปรับมิติใบหน้า',
      description: 'เติมเต็มทุกจุดบกพร่อง ปรับโหงวเฮ้ง และยกกระชับผิวหน้าด้วยฟิลเลอร์พรีเมียมของแท้ สลายได้ 100% ปลอดภัยไร้สารตกค้าง',
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1740&auto=format&fit=crop', // รูปแนว Treatment
      link: '#filler-detail'
    },
    {
      id: 'laser',
      title: 'Laser Rejuvenation',
      subtitle: 'นวัตกรรมเลเซอร์ฟื้นฟูผิวขั้นสุด',
      description: 'เผยผิวสว่างกระจ่างใส ลดเลือนจุดด่างดำ ฝ้า กระ และรอยแดงจากสิว พร้อมกระตุ้นคอลลาเจนใต้ชั้นผิวให้กลับมาแข็งแรงสุขภาพดี',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1740&auto=format&fit=crop', // รูปแนว Laser/Clinic
      link: '#laser-detail'
    }
  ];

  return (
    // ใช้พื้นหลังสีครีมของธีม
    <section id="services" className="py-24 lg:py-32 bg-[#FDFBF7] relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* หัวข้อ Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <p className="text-[#B76E79] font-light tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
            Signature Treatments
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            โปรแกรมการรักษาของเรา
          </h2>
          <div className="w-16 h-px bg-[#B76E79] mx-auto mb-6"></div>
          <p className="text-stone-500 text-lg font-light leading-relaxed">
            สัมผัสผลลัพธ์ที่เหนือกว่าด้วยนวัตกรรมความงามที่ปลอดภัย 
            ออกแบบการรักษาเฉพาะบุคคล เพื่อดึงความมั่นใจในตัวคุณออกมาให้โดดเด่นที่สุด
          </p>
        </div>

        {/* Grid แสดงบริการ 3 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {treatments.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col">
              
              {/* กรอบรูปภาพ */}
              <div className="relative w-full aspect-4/5 overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                
                {/* ป้ายชื่อบริการลอยๆ ด้านล่างรูป */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-linear-to-t from-stone-900/80 to-transparent">
                  <h3 className="text-2xl font-serif text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[#E4C5C4] text-sm font-light mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              {/* รายละเอียดใต้รูป */}
              <div className="flex-1 flex flex-col justify-between px-2">
                <p className="text-stone-500 font-light leading-relaxed mb-6">
                  {item.description}
                </p>
                
                {/* ลิงก์อ่านเพิ่มเติม (เปลี่ยนเป็นสีโรสโกลด์เมื่อ Hover) */}
                <a 
                  href={item.link} 
                  className="inline-flex items-center gap-2 text-stone-800 font-medium text-sm tracking-wide group-hover:text-[#B76E79] transition-colors duration-300 uppercase"
                >
                  Discover More 
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* ปุ่มดูบริการทั้งหมดด้านล่างสุด */}
        <div className="mt-20 text-center">
          <a href="#all-services" className="inline-block border border-[#B76E79] text-[#B76E79] hover:bg-[#B76E79] hover:text-white px-10 py-4 rounded-full font-medium transition-all duration-300">
            ดูโปรแกรมทั้งหมด
          </a>
        </div>

      </div>
    </section>
  );
};

export default Service;