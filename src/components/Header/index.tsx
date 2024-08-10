import IMLogo from '../../../public/images/im-logo.png'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Image src={IMLogo} alt="Zamrood Logo" width={120} height={40} />
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className={`hover:text-teal-600 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Home</a></li>
              <li><a href="#" className={`hover:text-teal-600 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Destinations</a></li>
              <li><a href="#" className={`hover:text-teal-600 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Experiences</a></li>
              <li><a href="#" className={`hover:text-teal-600 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>About</a></li>
              <li><a href="#" className={`hover:text-teal-600 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Contact</a></li>
            </ul>
          </nav>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700">Book Now</button>
        </div>
      </div>
    </header>
  )
}

export default Header