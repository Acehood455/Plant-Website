import floral1 from '../assets/img/floral-1.png'

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-green-800 pt-20 pb-10 md:pt-28 relative">
        <div className="container text-white absolute top-0 right-0 left-0 -translate-y-1/2">
            <div className="bg-green-700 px-10 pt-5 pb-10 space-y-5 rounded-md">
                <h3><span class="text-yellow-500">
                    Subscribe </span>
                    to our newsletter
                </h3>

                <div className="flex flex-col md:flex-row gap-2 ">
                    <input type="email" placeholder="Your Email Address" className="w-full px-5 py-3 text-green-700 rounded-md outline-none"/>
                    <button type="button" className="flex items-center gap-1 bg-green-800 px-5 py-3 rounded-md hover:opacity-80 duration-300">
                        <span>Subscribe</span>
                        <i class="ri-send-plane-2-fill"></i>
                    </button>
                </div>
            </div>
        </div>


        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="container mt-16 mb-18">
            <div className="border-b border-green-500 relative">
                <div className="absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto">
                    <div className="bg-yellow-100 text-lg text-center space-x-2">
                        <i class="ri-facebook-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
                        <i class="ri-twitter-x-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
                        <i class="ri-instagram-line hover:text-yellow-500 duration-300 cursor-pointer"></i>
                        <i class="ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </div>


        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="container mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-start">
            <div>
                <div className="text-7xl text-green-600 text-center inline-block">
                    <i class="ri-leaf-fill"></i>
                    <p className="font-Lobster text-xl sm:text-2xl">IndoorePlants.</p>
                </div>
            </div>

            <div>
                <p className="mb-5 font-bold text-xl">Quick Link</p>

                <div className="flex flex-col gap-1">
                    <a href="#">Plants</a>
                    <a href="#">Flowers</a>
                    <a href="#">Gardening</a>
                    <a href="#">Seeds</a>
                    <a href="#">Shipping</a>
                </div>
            </div>

            <div>
                <p className="mb-5 font-bold text-xl">Popular Services</p>

                <div className="flex flex-col gap-1">
                    <a href="#">Tree Planting</a>
                    <a href="#">Grass Cutting</a>
                    <a href="#">Weeds Control</a>
                    <a href="#">Project</a>
                    <a href="#">Landscaping</a>
                </div>
            </div>

            <div>
                <p className="mb-5 font-bold text-xl">Contact Us </p>

                <div className="flex flex-col gap-1">
                    <a href="tel:+2348136546116">+234 813 654 6116</a>
                    <a href="mailto:acetaiwo8@gmail.com">indooreplants@contact.com</a>
                    <br />
                    <p>1234 Tailwind Ave, CSS City, Webland 56789, USA</p>
                </div>
            </div>
        </div>


        <div className="container">
            <p className="text-center mt-10 opacity-50">Copyright &copy; 2024 LightCode. All rights reserved.</p>
        </div>

        <div data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="700" 
        data-aos-delay="500" className='absolute bottom-0 left-0 opacity-20 pointer-events-none'>
            <img src={floral1} alt="floral_image" className='w-full lg:w-1/2' />
        </div>
    </footer>
  );
};

export default Footer;
