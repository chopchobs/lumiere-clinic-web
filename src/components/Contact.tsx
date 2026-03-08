import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* ฝั่งซ้าย: ข้อมูลการติดต่อ */}
          <div className="w-full lg:w-1/2">
            <p className="text-[#B76E79] font-medium tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
              ติดต่อและจองคิว
            </h2>
            <div className="w-16 h-px bg-[#E4C5C4] mb-10"></div>
            
            <p className="text-stone-500 font-light leading-relaxed text-lg mb-10">
              LUMIÈRE Clinic ยินดีให้คำปรึกษาและประเมินรูปหน้าฟรี <br className="hidden md:block"/>
              คุณสามารถติดต่อนัดหมายล่วงหน้าได้ผ่านช่องทางด้านล่างนี้
            </p>

            {/* รายละเอียดการติดต่อ (Icon + Text) */}
            <div className="space-y-6 mb-12">
              {/* ที่อยู่ */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-[#E4C5C4]/50 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#B76E79]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-stone-800 font-medium mb-1">Location</h4>
                  <p className="text-stone-500 font-light text-sm leading-relaxed">
                    123 สุขุมวิท 55 (ทองหล่อ) <br/>
                    แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110
                  </p>
                </div>
              </div>

              {/* เวลาทำการ */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-[#E4C5C4]/50 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#B76E79]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-stone-800 font-medium mb-1">Operating Hours</h4>
                  <p className="text-stone-500 font-light text-sm">
                    เปิดให้บริการทุกวัน <br/>
                    10:00 น. - 20:00 น.
                  </p>
                </div>
              </div>

              {/* เบอร์โทรศัพท์ */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white border border-[#E4C5C4]/50 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-[#B76E79]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-stone-800 font-medium mb-1">Phone</h4>
                  <p className="text-stone-500 font-light text-sm">
                    02-123-4567
                  </p>
                </div>
              </div>
            </div>

            {/* ปุ่ม Add LINE (ใช้สีเขียว LINE ให้ลูกค้าคุ้นเคย แต่ปรับดีไซน์ให้ดูพรีเมียม) */}
            <a 
              href="https://line.me/ti/p/~@yourclinic" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#00B900] hover:bg-[#009900] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg shadow-[#00B900]/20 hover:-translate-y-1"
            >
              {/* โลโก้ LINE (SVG) */}
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 3.266 8.846 8.169 9.601.319.068.756.216.864.494.098.249.031.636.015.89-.021.32-.132 1.579-.16 1.889-.034.375-.164.79.529.5 1.053-.44 5.672-3.344 7.954-5.881 2.375-2.637 3.629-5.467 3.629-7.493z" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-xs font-light opacity-90 leading-none">เพิ่มเพื่อนรับโปรโมชั่น</span>
                <span className="text-base font-bold tracking-wide leading-none mt-1">LINE: @LUMIERE</span>
              </div>
            </a>
          </div>

          {/* ฝั่งขวา: แผนที่ Google Maps */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-100 lg:h-150 rounded-4xl overflow-hidden shadow-2xl border-4 border-white">
              {/* ใช้ iframe ฝังแผนที่ (แก้ไข URL ให้ตรงกับพิกัดร้านจริง) */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.502856943149!2d100.57013895!3d13.73315895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e52516a2cc5%3A0xcdafae0b48455115!2sThong%20Lo%2C%20Bangkok!5e0!3m2!1sen!2sth!4v1680000000000!5m2!1sen!2sth" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale-20 contrast-110" // ใส่ filter ให้แผนที่สีดรอปลงนิดหน่อยจะได้เข้ากับธีม
              ></iframe>
            </div>
            
            <p className="text-center text-stone-400 text-xs mt-4 font-light">
              มีที่จอดรถส่วนตัวให้บริการสำหรับลูกค้าคลินิก
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;