import { useState, useEffect } from 'react';
import leafImg1 from '../assets/img/leaf-1.png';
import leafImg2 from '../assets/img/leaf-2.png';
import menu4 from '../assets/icons/menu-4-line.svg'
import close from '../assets/icons/close-large-line.svg'

const navItems = ["Home", "About", "Popular", "Review"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50);

      const scrollY = window.scrollY;

      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop - 80;
          const sectionHeight = section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(item.toLowerCase());
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  
  return (
    <header
    id="navbar"
    className={`fixed w-full top-0 left-0 z-50 bg-green-800 transition-all duration-300 ${
      scrolled ? 'border-b border-yellow-500 shadow-md' : ''
    }`}
  >
    <nav className="container flex items-center justify-between h-16 sm:h-20">
      <div className='font-Lobster sm:text-2xl'>IndoorePlants.</div>

      {/* Mobile Nav Menu */}
      <div
          id="nav-menu"
          className={`absolute top-0 ${
            isMenuOpen ? 'left-0' : 'left-[-100%]'
          } min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center 
          justify-center duration-300 overflow-hidden lg:static lg:min-h-fit lg:bg-transparent 
          lg:w-auto`}
        >
          <ul className='flex flex-col items-center gap-8 lg:flex-row'>
          {navItems.map((item) => (
              <li key={item}>
                 <a
                 href={`#${item.toLowerCase()}`}
                 className={`nav-link capitalize ${
                   activeSection === item.toLowerCase() ? 'text-yellow-500' : ''
                 }`}
                 onClick={() => setIsMenuOpen(false)} // Auto-close on link click
                 >
                 {item}
                 </a>
              </li>
          ))}
        </ul>

        <div className='absolute bottom-0 -right-10 opacity-90 lg:hidden'>
          <img src={leafImg1} alt="leaf_image" className='w-32' />
        </div>

        <div className='absolute -top-5 -left-5 rotate-90 opacity-90 lg:hidden'>
          <img src={leafImg2} alt="leaf_image" className='w-32'/>
        </div>
      </div>

      {/* Hamburger */}
      <div className='cursor-pointer z-50 lg:hidden' onClick={toggleMenu}>
          <img
            src={isMenuOpen ? close : menu4}
            alt="menu-icon"
            id="hamburger"
            className="w-6 h-6 sm:w-10 sm:h-10"
          />
      </div>
    </nav>
  </header>);
};

export default Header;
