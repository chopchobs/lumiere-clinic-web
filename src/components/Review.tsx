import React from 'react';

const Reviews = () => {
  // ข้อมูลจำลองรีวิว พร้อมใส่ <span> เพื่อเน้นคำสำคัญให้ลูกค้าที่เลื่อนผ่านอ่านเจอจุดเด่นทันที
  const reviewsData = [
    {
      id: 1,
      name: "คุณแพรวพิไล",
      treatment: "โปรแกรม เลเซอร์หน้าใส",
      rating: 5,
      text: (
        <>
          ประทับใจมากค่ะ คลินิกสะอาด หรูหรา พนักงานดูแลดีมาก ที่สำคัญ <span className="font-medium text-[#B76E79]">คุณหมอมือเบาสุดๆ</span> ทำเลเซอร์ไปแค่ครั้งเดียวเพื่อนทักเลยว่าหน้าใสขึ้น แนะนำที่นี่เลยค่ะ
        </>
      ),
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "คุณนัท",
      treatment: "โปรแกรม ปรับรูปหน้า (Filler)",
      rating: 5,
      text: (
        <>
          ตอนแรกกลัวเจ็บมาก แต่พอมาทำที่ LUMIÈRE คุณหมอให้คำปรึกษาดีมาก ออกแบบทรงให้เข้ากับหน้าเราจริงๆ ทำเสร็จ <span className="font-medium text-[#B76E79]">ไม่บวม ไม่ช้ำเลย ธรรมชาติมากค่ะ</span>
        </>
      ),
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "คุณเมย์",
      treatment: "โปรแกรม Anti-Aging (HIFU)",
      rating: 5,
      text: (
        <>
          เป็นลูกค้าประจำที่นี่ค่ะ คุณหมออัปเดตเครื่องมือใหม่ๆ ตลอด ล่าสุดทำโปรแกรมยกกระชับไป <span className="font-medium text-[#B76E79]">กรอบหน้าชัดขึ้นมาก ถ่ายรูปมุมไหนก็มั่นใจค่ะ</span> รักเลย
        </>
      ),
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
    }
  ];

  return (
    // เปลี่ยนพื้นหลังเป็นสีขาว เพื่อตัดกับหน้า Services ที่เป็นสีครีม
    <section id="reviews" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      
      {/* วงกลมตกแต่งฉากหลัง (เบลอๆ) */}
      <div className="absolute top-0 right-0 w-120 h-120 bg-[#FDFBF7] rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* หัวข้อ Section */}
        <div className="text-center mb-16 lg:mb-24 max-w-2xl mx-auto">
          <p className="text-[#B76E79] font-medium tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
            Client Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            ความประทับใจจากลูกค้า
          </h2>
          <div className="w-16 h-px bg-[#E4C5C4] mx-auto mb-6"></div>
          <p className="text-stone-500 font-light leading-relaxed text-lg">
            เสียงตอบรับจากผู้ใช้บริการจริงกว่า 10,000 เคส <br className="hidden md:block"/>
            ที่ไว้วางใจให้ LUMIÈRE Clinic ดูแลความงาม
          </p>
        </div>

        {/* Grid แสดงการ์ดรีวิว */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reviewsData.map((review) => (
            <div 
              key={review.id}
              className="relative bg-[#FDFBF7] p-8 md:p-10 rounded-4xl border border-[#E4C5C4]/30 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
            >
              {/* Icon เครื่องหมายคำพูด (Quote) ตกแต่งเป็น Background ลางๆ */}
              <div className="absolute top-6 right-8 text-[#E4C5C4]/30 font-serif text-8xl leading-none pointer-events-none select-none group-hover:text-[#E4C5C4]/50 transition-colors duration-500">
                "
              </div>

              {/* รูปดาว 5 ดาว (ใช้สีโรสโกลด์) */}
              <div className="flex gap-1.5 mb-8 relative z-10">
                {[...Array(review.rating)].map((_, index) => (
                  <svg key={index} className="w-5 h-5 text-[#B76E79]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* ข้อความรีวิว */}
              <p className="text-stone-600 font-light leading-relaxed mb-10 relative z-10 text-base md:text-lg min-h-30">
                "{review.text}"
              </p>

              {/* โปรไฟล์ลูกค้า */}
              <div className="flex items-center gap-4 pt-6 border-t border-[#E4C5C4]/40 relative z-10">
                <div className="relative">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  {/* กรอบล้อมรอบรูปโปรไฟล์ */}
                  <div className="absolute inset-0 rounded-full border border-[#B76E79]/30 scale-110"></div>
                </div>
                <div>
                  <h4 className="text-stone-800 font-medium tracking-wide">{review.name}</h4>
                  <p className="text-[#B76E79] text-xs font-light tracking-wide mt-1 uppercase">{review.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;