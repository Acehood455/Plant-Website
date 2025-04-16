import plant1 from '../assets/img/plant-1.png';
import plant2 from '../assets/img/plant-2.png';
import leaf3 from '../assets/img/leaf-3.png';


const AboutUs = () => {
  return (
    <section id="about" className='relative overflow-hidden'>
        <div 
            data-aos-easing="linear"
            data-aos="fade-left"
            data-aos-duration="1000" 
            data-aos-delay="1000" 
            className='absolute -top-8 -right-12 opacity-70'>
            <img src={leaf3} alt="leaf-3" className='w-40 md:w-52 xl:w-64' />
        </div>
        
        <div data-aos="fade-down" className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
            <h2 className='title'>About Us</h2>
            <p className='max-w-2xl'>Follow instruction for more</p>
        </div>

        <div className='container space-y-10 xl:space-y-0'>
            {/* item 1 */}
            <div className='flex flex-col items-center lg:flex-row gap-5'>
                <div className='w-full lg:w-1/2'>
                    <img src={plant1} alt="about_image"
                    data-aos="fade-right"
                     className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto' />
                </div>

                <div className='w-full lg:w-1/2'>
                    <div data-aos="fade-left" className='space-y-5'>
                        <h3>
                        Make your <span class="text-yellow-500">organic</span>  <br />garden
                        </h3>
                        <p className='text-slate-300 font-Lobster'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ratione rem maxime veniam cum libero voluptas tempora aut saepe similique, eos corporis. Expedita culpa consequatur animi deleniti ullam adipisci iure sequi dolores modi aliquam laudantium, explicabo nobis quia id reprehenderit.?
                        </p>
                    </div>
                </div>
            </div>

            {/* item 2 */}
            <div className='flex flex-col items-center lg:flex-row-reverse gap-5'>
                <div className='w-full lg:w-1/2'>
                    <img src={plant2} alt="about_image"
                    data-aos="fade-left"
                     className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto' />
                </div>

                <div className='w-full lg:w-1/2'>
                    <div data-aos="fade-right" className='space-y-5'>
                        <h3>
                            Come with us <br />
                            <span class="text-yellow-500">grow up </span> 
                            your plantMake your <span class="text-yellow-500">organic</span>  <br />garden
                        </h3>
                        <p className='text-slate-300 font-Lobster'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ratione rem maxime veniam cum libero voluptas tempora aut saepe similique, eos corporis. Expedita culpa consequatur animi deleniti ullam adipisci iure sequi dolores modi aliquam laudantium, explicabo nobis quia id reprehenderit.?
                        </p>
                    </div>
                </div>
            </div>


        </div>
    </section>
  );
};

export default AboutUs;
