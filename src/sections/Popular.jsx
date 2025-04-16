import cart1 from "../assets/img/cart-1.png";
import cart2 from "../assets/img/cart-2.png";
import cart3 from "../assets/img/cart-3.png";
import cart4 from "../assets/img/cart-4.png";

const Popular = () => {
  return (
    <section id="popular" className="bg-green-700">
        <div data-aos="fade-down" className='flex flex-col items-center gap-3 text-center mb-40 md:mb-32'>
            <h2 className='title'>Your Choice Plant</h2>
            <p className='max-w-2xl'>Follow instructions for more</p>
        </div>

        <div className="container w-full grid grid-cols-1 gap-x-8 gap-y-36
          md:grid-cols-2 xl:grid-cols-4">
            {/* card 1 */}
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="popular__card bg-green-800 p-10 pt-24 rounded-md relative">
                <img src={cart1} alt="popular-image" 
                  className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500" />
                <p className="italic">Nephrolepis exaltata</p>
                <h3>Boston Fern</h3>

                <div className="text-yellow-500 text-xs py-3">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-fill"></i>
                    <i class="ri-star-line text-gray-400"></i>
                    <i class="ri-star-line text-gray-400"></i>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-xl">$5</p>
                    <button className="bg-yellow-500 px-2 py-1 rounded-sm">
                        <i class="ri-shopping-cart-fill"></i>
                    </button>
                </div>
            </div>

            {/* card 2 */}
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="popular__card bg-green-800 p-10 pt-24 rounded-md relative">
                <img src={cart2} alt="popular-image" 
                  className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500" />
                <p className="italic">Ficus elastica</p>
                <h3>Rubber Plant</h3> 
 
                <div className="text-yellow-500 text-xs py-3">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-fill"></i>
                    <i class="ri-star-line text-gray-400"></i>
                    <i class="ri-star-line text-gray-400"></i>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-xl">$10</p>
                    <button className="bg-yellow-500 px-2 py-1 rounded-sm">
                        <i class="ri-shopping-cart-fill"></i>
                    </button>
                </div>
            </div>

            {/* card 3 */}
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="popular__card bg-green-800 p-10 pt-24 rounded-md relative">
                <img src={cart3} alt="popular-image" 
                  className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500" />
                <p className="italic">Spathiphyllum wallisii</p>
                <h3>Peace Lily</h3>

                <div className="text-yellow-500 text-xs py-3">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-fill"></i>
                    <i class="ri-star-line text-gray-400"></i>
                    <i class="ri-star-line text-gray-400"></i>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-xl">$15</p>
                    <button className="bg-yellow-500 px-2 py-1 rounded-sm">
                        <i class="ri-shopping-cart-fill"></i>
                    </button>
                </div>
            </div>

            {/* card 4 */}
            <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="popular__card bg-green-800 p-10 pt-24 rounded-md relative">
                <img src={cart4} alt="popular-image" 
                  className="w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500" />
                <p className="italic">Adenium obesum </p>
                <h3>Desert Rose</h3>

                <div className="text-yellow-500 text-xs py-3">
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-fill"></i>
                    <i class="ri-star-half-fill"></i>
                    <i class="ri-star-line text-gray-400"></i>
                    <i class="ri-star-line text-gray-400"></i>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-xl">$54</p>
                    <button className="bg-yellow-500 px-2 py-1 rounded-sm">
                        <i class="ri-shopping-cart-fill"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Popular;
