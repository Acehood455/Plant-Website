import homeImg from '../assets/img/home.png'

const Home = () => {
  return (
    <section id="home" className='relative'>
        <div className='container'>
            {/* blob 1 */}
            <div className='w-64 h-64 bg-green-400 rounded-full blur-3xl
            -z-10 opacity-40 absolute top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2' />
            
            {/* blob 2 */}
            <div className='w-64 h-64 bg-green-400 rounded-full blur-3xl
            -z-10 opacity-40 absolute right-0 bottom-0'  />

            <div className='flex flex-col items-center gap-5 lg:flex-row'>
                {/* content */}
                <div data-aos="fade-down" className='w-full space-y-5 lg:w-1/2'>
                    <h1>
                        <span class="text-yellow-500">Plants</span> make a <br />
                            positive 
                        <span class="text-yellow-500">impact</span> on <br />
                            your environment
                    </h1>

                    <p className='text-slate-300 font-Lobster'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio fugiat eveniet, reprehenderit veritatis aut explicabo voluptatum ullam itaque tenetur numquam!
                    </p>

                    <div className='flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10'>
                        <button className='btn'>
                            <span>Shop Now</span>
                            <i class="ri-leaf-line"></i>
                        </button>

                        <button className='btn btn_outline'>
                            <span>Know More</span>
                            <i class="ri-leaf-line"></i>
                        </button>
                    </div>

                    <p className='text-xs font-Lobster text-slate-300'>
                        You will get 30-days free trial.
                    </p>

                    <div className='flex items-center gap-5 text-lg lg:pt-10'>
                        <i class="ri-facebook-fill text-slate-300 hover:text-yellow-300 cursor-pointer duration-300"></i>
                        <i class="ri-twitter-x-line text-slate-300 hover:text-yellow-300 cursor-pointer duration-300 text-base"></i>
                        <i class="ri-instagram-line text-slate-300 hover:text-yellow-300 cursor-pointer duration-300"></i>
                        <i class="ri-linkedin-fill text-slate-300 hover:text-yellow-300 cursor-pointer duration-300"></i>
                    </div>
                </div>

                {/* image */}
                <div data-aos="zoom-in" className='w-full relative lg:w-1/2'>
                    <img src={homeImg} alt="home-img" />
                    
                    {/* leaf */}
                    <div className='absolute -top-10 right-0 opacity-30 xl:top-5 animate-movingY'>
                        <i class="ri-leaf-line text-6xl text-yellow-500"></i>
                    </div>

                    {/* flower */}
                    <div className='absolute bottom-0 left-0 opacity-30  xl:bottom-12 animate-rotating'>
                        <i class="ri-flower-line text-6xl text-yellow-500"></i>
                    </div>

                    {/* plant */}
                    <div className='absolute hidden lg:block -top-8 -left-5 opacity-30 animate-scalingUp' >
                        <i class="ri-plant-line text-6xl text-yellow-500"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;
