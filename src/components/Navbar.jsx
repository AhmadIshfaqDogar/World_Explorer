import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <i className="fas fa-globe-americas text-primary text-2xl"></i>
            <Link to="/" className="text-xl font-bold text-dark">WorldExplorer</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${isActive('/') ? 'text-primary font-medium border-b-2 border-primary' : 'text-gray-600 hover:text-primary transition'}`}
            >
              Home
            </Link>
            <Link 
              to="/countries" 
              className={`${isActive('/countries') ? 'text-primary font-medium border-b-2 border-primary' : 'text-gray-600 hover:text-primary transition'}`}
            >
              Countries
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3 shadow-md">
            <Link 
              to="/" 
              className="block text-primary font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/countries" 
              className="block text-gray-600 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Countries
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar