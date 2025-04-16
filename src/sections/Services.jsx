const Services = () => {
  return (
  <div className="bg-white text-green-700 py-20">
      <div className="container w-full grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

        {/* card 1 */}
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="border border-green-700 p-5 cursor-pointer rounded-md
          hover:shadow-sxl hover:-translate-y-2 duration-300 space-y-5">
            <div className="flex items-center gap-5">
                <i class="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
                <p className="md:text-lg font-bold">
                Fast <br />
                Delivery
                </p>
            </div>

            <p className="font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis
            </p>
        </div>

        {/* card 2 */}
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="border border-green-700 p-5 cursor-pointer rounded-md
          hover:shadow-2xl hover:-translate-y-2 duration-300 space-y-5">
            <div className="flex items-center gap-5">
                <i class="ri-customer-service-line text-3xl md:text-4xl xl:text-5xl"></i>
                <p className="md:text-lg font-bold">
                Great Customer <br />
                Service
                </p>
            </div>

            <p className="font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis
            </p>
        </div>

        {/* card 3 */}
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="border border-green-700 p-5 cursor-pointer rounded-md
          hover:shadow-2xl hover:-translate-y-2 duration-300 space-y-5">
            <div className="flex items-center gap-5">
                <i class="ri-plant-line text-3xl md:text-4xl xl:text-5xl"></i>
                <p className="md:text-lg font-bold">
                Original <br />
                Plants
                </p>
            </div>

            <p className="font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis
            </p>
        </div>

        {/* card 4 */}
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="border border-green-700 p-5 cursor-pointer rounded-md
          hover:shadow-2xl hover:-translate-y-2 duration-300 space-y-5">
            <div className="flex items-center gap-5">
                <i class="ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl"></i>
                <p className="md:text-lg font-bold">
                Affordable <br />
                Price
                </p>
            </div>

            <p className="font-Lobster">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis
            </p>
        </div>
      </div>
    
  </div>
  );
};

export default Services;
