'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full py-6 px-6 md:px-12 lg:px-20 flex justify-between items-center border-b border-gray-200 bg-white relative z-50">
      <h1 className="text-lg font-semibold text-brandGray">Kaleidoscope Ceramics</h1>

      {/* Desktop Menu + Button */}
      <div className="hidden md:flex items-center gap-20 text-sm text-gray-700">
        <nav className="flex gap-10">
          <a href="#" className="hover:text-brandGray">Home</a>
          <a href="#about" className="hover:text-brandGray">About</a>
          <a href="#products" className="hover:text-brandGray">Products</a>
          <a href="#review" className="hover:text-brandGray">Review</a>
        </nav>
        <button className="bg-primaryblue border border-brandGray text-brandGray px-5 py-2 rounded-full text-sm">
          Shop now
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button className="md:hidden ml-auto" onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full bg-white px-6 py-4 flex flex-col gap-4 text-sm text-gray-700 border-t border-gray-200 md:hidden">
          <a href="#" onClick={() => setMobileOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileOpen(false)}>About</a>
          <a href="#products" onClick={() => setMobileOpen(false)}>Products</a>
          <a href="#review" onClick={() => setMobileOpen(false)}>Review</a>
          <button className="bg-primaryblue text-white px-4 py-2 rounded-full mt-2 w-fit">
            Shop now
          </button>
        </div>
      )}
    </header>
  )
}

