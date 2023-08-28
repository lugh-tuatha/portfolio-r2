import React, { useState } from 'react';
import './header.css';
import Navlinks from './Navlinks';

import * as Io from 'react-icons/io'

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDark, setIsDark] = useState(true)

  const handleCheckboxChange = () => {
    setOpenMenu(!openMenu); 
  };
  return (
    <>
      <nav className="flex items-center justify-between h-20 shadow-md shadow-gray-300 ">
        <h1 className="text-blue-400 font-bold text-2xl"><a href="/">BRAND</a></h1>

        <div className="hidden md:flex items-center gap-6 font-semibold">
          <ul className="flex items-center gap-6">
            <Navlinks />
          </ul>

          <div className='cursor-pointer' onClick={() => setIsDark(!isDark)}>
            {isDark ? <Io.IoMdMoon size={22} /> : <Io.IoMdSunny size={22} />}
          </div>

          <button className="px-4 py-2 bg-blue-300 rounded-md">Download CV</button>
        </div>

        <div className="md:hidden">
          <input hidden className="check-icon" id="check-icon" name="check-icon" type="checkbox" onChange={handleCheckboxChange} />
          <label className="icon-menu" htmlFor="check-icon">
            <div className="bar bar--1"></div>
            <div className="bar bar--2"></div>
            <div className="bar bar--3"></div>
          </label>
        </div>
      </nav>
      
      {/* mobile menu */}
      <div className={`mobile-menu w-full absolute bg-white ${openMenu ? '' : 'hidden'}`}>
        <div className="text-center font-semibold ">
          <ul className="flex text-xl flex-col gap-2">
            <Navlinks />
          </ul>

          <button className="px-4 py-2 bg-blue-300 rounded-md mt-4 md:mt-0">Download CV</button>
        </div>
      </div>
    </>
  )
}

export default Header