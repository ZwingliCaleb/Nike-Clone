import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState, useEffect } from "react";

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Add event listener to toggle sticky class and close dropdown menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
        setMenuOpen(false); // Close the menu when scrolling starts
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`padding-x py-8 absolute z-50 w-full ${isSticky ? 'sticky top-0 bg-white shadow-md' : ''}`}>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
                onClick={closeMenu} // Close the menu when a link is clicked
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block relative z-50'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} onClick={toggleMenu}/>
          {isMenuOpen && (
            <ul className="absolute top-full right-0 border border-gray-300 py-6 mt-4
             rounded-[10px] shadow-lg z-60 w-[160px] lg:w-[500px] bg-opacity-25 backdrop-filter backdrop-blur-3xl">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                    onClick={closeMenu} // Close the menu when a link is clicked
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
