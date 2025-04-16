import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#"
      className={`fixed right-4 bottom-6 bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 duration-300 transition-transform ${
        showButton
          ? "opacity-100 pointer-events-auto hover:-translate-y-1"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <i className="ri-arrow-up-line" id="scroll-up"></i>
    </a>
  );
};

export default ScrollToTopButton;
