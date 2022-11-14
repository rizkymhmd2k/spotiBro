import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from "react-icons/hi";

import { logo } from '../assets'
import { links } from '../assets/constants'
console.log('links', links);
//link is an array with objects inside

//import it in sidebar, map the link object of name and when clicked go to item.to, import and render icon too
const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        //only on mobile devices, check if exists first
        onClick={() => handleClick && handleClick()}>
        <item.icon className="w-6 h-6 mr-2 " />
        {item.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  //only for Desktop, div : padding for y and x
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>


      {/* mobile menu */}
      {/* absolute, and position. icon to open/close  */}
      <div className="absolute top-6 right-3 md:hidden block ">
        {/* () is to return bro */}
        {mobileMenuOpen ? (<RiCloseLine onClick={()=>setMobileMenuOpen(false)} className="w-6 h-6 text-white mr-2" />) : 
        (<HiOutlineMenu onClick={()=>setMobileMenuOpen(true)} className="w-6 h-6 text-white mr-2" />)}
      </div>
      <div className={`absolute top-0 h-screen w-2/3 py-10 px-4 bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg z-10 
      md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : "-left-full"} `}>
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={()=>setMobileMenuOpen(false)}/>
      </div>
    </>
  )
}

export default Sidebar;
