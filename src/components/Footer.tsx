import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 pt-20 pb-10 border-t-4 border-[#B76E79]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ส่วนบนของ Footer แบ่งเป็น 3 คอลัมน์ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* คอลัมน์ 1: โลโก้และคำอธิบาย (กินพื้นที่ 4 ส่วน) */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="text-3xl tracking-widest font-serif text-white mb-6">
              LUMIÈRE
            </div>
            <p className="text-stone-400 font-light leading-relaxed mb-8 max-w-sm">
              คลินิกเวชกรรมความงามระดับพรีเมียม ดูแลทุกรายละเอียดด้วยนวัตกรรมที่ทันสมัยและปลอดภัย เพื่อดึงความงามในเวอร์ชันที่ดีที่สุดของคุณ
            </p>
            {/* Social Media Icons (เรียบหรู) */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-[#B76E79] hover:text-[#B76E79] hover:bg-stone-800 transition-all">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-[#B76E79] hover:text-[#B76E79] hover:bg-stone-800 transition-all">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 hover:border-[#B76E79] hover:text-[#B76E79] hover:bg-stone-800 transition-all">
                LN
              </a>
            </div>
          </div>

          {/* คอลัมน์ 2: Quick Links (กินพื้นที่ 4 ส่วน) */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-white font-medium tracking-wide mb-6 uppercase text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-stone-400 font-light hover:text-[#B76E79] transition-colors">เกี่ยวกับเรา (About Us)</a></li>
              <li><a href="#services" className="text-stone-400 font-light hover:text-[#B76E79] transition-colors">โปรแกรมการรักษา (Treatments)</a></li>
              <li><a href="#reviews" className="text-stone-400 font-light hover:text-[#B76E79] transition-colors">รีวิวจากลูกค้า (Reviews)</a></li>
              <li><a href="#contact" className="text-stone-400 font-light hover:text-[#B76E79] transition-colors">ติดต่อจองคิว (Contact)</a></li>
            </ul>
          </div>

          {/* คอลัมน์ 3: Legal & Support (กินพื้นที่ 4 ส่วน) */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-white font-medium tracking-wide mb-6 uppercase text-sm">Support & Legal</h4>
            <ul className="space-y-4">
              <li><a href="/faq" className="text-stone-400 font-light hover:text-white transition-colors">คำถามที่พบบ่อย (FAQ)</a></li>
              <li><a href="/terms" className="text-stone-400 font-light hover:text-white transition-colors">เงื่อนไขการให้บริการ (Terms of Service)</a></li>
              <li><a href="/privacy" className="text-stone-400 font-light hover:text-white transition-colors">นโยบายความเป็นส่วนตัว (Privacy Policy)</a></li>
            </ul>
          </div>

        </div>

        {/* เส้นคั่นบางๆ */}
        <div className="w-full h-px bg-stone-800 mb-8"></div>

        {/* ส่วนล่างสุด: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 font-light text-sm">
            &copy; 2026 LUMIÈRE Clinic. All rights reserved.
          </p>
          <p className="text-stone-600 font-light text-xs">
            Designed with <span className="text-[#B76E79]">♥</span> for premium beauty.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;