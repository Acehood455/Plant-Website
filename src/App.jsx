import React, { useEffect } from "react";
import Header from "./sections/Header";
import Home from "./sections/Home";
import Services from "./sections/Services";
import AboutUs from "./sections/AboutUs";
import Popular from "./sections/Popular";
import Reviews from "./sections/Reviews";
import Footer from "./sections/Footer";
import ScrollToTopButton from "./sections/components/ScrollToTopButton";

import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: false,    
      offset: 100,   // offset (in px) from the original trigger point
    });
  }, []);
  
  return (
  <div className="">
    <Header />
    <Home />
    <Services />
    <AboutUs />
    <Popular />
    <Reviews />
    <Footer />
    <ScrollToTopButton />
  </div>);
};

export default App;
