import { useState } from "react";
import Alight from "../assets/Alight.svg";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState("hidden");

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <main
      className="h-aut0 bg-slate-800 shadow-md shadow-slate-500
text-white flex flex-col justify-center sticky z-50 top-0 "
    >
      <header className="flex h-20 items-center justify-between w-[90%] md:[70%]">
        <img className="" src={Alight} alt="logo" />

        <ul className="hidden md:block space-x-8 text-lg ${}">
          <a href="#hero" className="text-white hover:text-green-200 ">
            Home
          </a>
          <a href="#about" className="text-white hover:text-green-200">
            About
          </a>
          <a href="#skills" className="text-white hover:text-green-200">
            Skills
          </a>
          <a href="#contact" className="text-white hover:text-green-200">
            Contact
          </a>
        </ul>
        <button onClick={toggleState} className="block md:hidden ">
          <MdMenu className="text-4xl" />
        </button>
      </header>

      <ul
        className={`transition-all duration-500 ease-in-out
        space-x-8 text-2xl py-8 flex flex-col justify-center items-center gap-8 text-white font-medium bg-green-800 
        
        ${toggle ? " hidden" : " block"} md:hidden`}
      >
        <div className="flex flex-col gap-6 ">
          <a href="#hero" className=" hover:text-green-900">
            Home
          </a>
          <a href="#about" className=" hover:text-green-900">
            About
          </a>
          <a href="#skills" className=" hover:text-green-900 ">
            Skills
          </a>
          <a href="#contact" className=" hover:text-green-900 ">
            Contact
          </a>
        </div>
      </ul>
    </main>
  );
};

export default Navbar;
