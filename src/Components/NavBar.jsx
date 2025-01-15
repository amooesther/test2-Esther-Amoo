import React from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav className=" text-gold py-4 px-6 shadow-md">
  <div className="max-w-6xl mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold text-gold">
      <img src={logo} alt="Sasha Dubois Wellness Coach Logo" className="h-10" />
    </div>
    <ul className="hidden md:flex space-x-6 text-lg">
      <li><a href="#" className="hover:underline">Home</a></li>
      <li><a href="#details" className="hover:underline">Details</a></li>
      <li><a href="#coach" className="hover:underline">Coach</a></li>
      <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
      <li><a href="#cta" className="hover:underline">Sign Up</a></li>
    </ul>
    <button className="md:hidden text-2xl text-gold focus:outline-none">
      &#9776;
    </button>
  </div>
</nav>

  )
}

export default NavBar