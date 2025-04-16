import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import review1 from '../assets/img/review-1.jpg'
import review2 from '../assets/img/review-2.jpg'
import review3 from '../assets/img/review-3.jpg'
import review4 from '../assets/img/review-4.jpg'
import leaf4 from '../assets/img/leaf-4.png'

const Reviews = () => {
    const reviews = [
      { img: review1, name: "Jane Doe", role: "Designer" },
      { img: review2, name: "John Smith", role: "Developer" },
      { img: review3, name: "Alice Ray", role: "Manager" },
      { img: review4, name: "Lucas Lee", role: "Artist" },
    ];
  
return (
      <section id="review" className='relative mb-20 md:mb-28 overflow-hidden'>
        <div 
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1000" 
        data-aos-delay="1000" className='absolute -top-8 -left-12 opacity-70'>
            <img src={leaf4} alt="leaf_4" className='w-40 md:w-52 xl:w-64 ' />
        </div>

        <div data-aos="fade-down" className='flex flex-col items-center gap-3 text-center mb-40 md:mb-32'>
          <h2 className='title'>Customer Reviews</h2>
          <p className='max-w-2xl'>Follow instructions for more</p>
        </div>
  
        <div className='container'>
          <Swiper
            modules={[Pagination, Autoplay, Navigation, Scrollbar]}
            direction="horizontal"
            loop={true}
            pagination={{
                clickable: true,
                el: '.swiper-pagi', // This tells Swiper to place the pagination outside
            }}
            grabCursor={true} 
            autoplay={{
                delay: 3000, // ⬅️ time in ms (3s)
                disableOnInteraction: false, // keeps autoplay going even after user interacts
              }}
            spaceBetween={32}
            breakpoints={{
                640: {
                    slidesPerView: 1
                },
                
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                },

            }}
            speed={1000}
            // navigation
            // scrollbar={{ draggable: true }}
            className="py-12"
          >
            {reviews.map(({ img, name, role }, idx) => (
              <SwiperSlide key={idx}>
                <div data-aos="fade-right"
     data-aos-easing="linear"
     data-aos-duration="1500" className='flex flex-col gap-5 bg-green-700 rounded-md p-6'>
                  <p className='font-Lobster'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa ut amet voluptas asperiores alias sed consequatur.
                  </p>
                  <div className='flex items-center'>
                    <img src={img} alt={`review_${idx}`} className='w-12 h-12 rounded-full' />
                    <div className='ml-2'>
                      <p className='text-yellow-500 uppercase'>{name}</p>
                      <p>{role}</p>
                    </div>
                    <i className="ri-double-quotes-r text-4xl ml-auto"></i>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagi"></div>
        </div>
      </section>
    );
};
  
export default Reviews;  
