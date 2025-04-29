import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-[#111] py-5 w-full">
      <div className="max-w-[1200px] mx-auto flex items-center px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="text-[40px] font-bold text-[#00f2fe]">Flexi</span>
          <span className="text-[40px] font-bold text-[#f97102]">Slot</span>
        </div>

        {/* Center nav links */}
        <nav className="ml-10">
          <ul className="flex space-x-8">
            {[
              { label: 'Home', to: '/' },
              { label: 'Book Slot', to: '/booking' },
              { label: 'My Bookings', to: '/bookingstatus' },
              { label: 'Contact', to: '/contact' },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="text-[#00f2fe] text-lg transition-colors duration-300 hover:text-[#ff00ff]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Search */}
        <div className="hidden md:block">
          <input
            placeholder="search"
            className="px-2 py-1 rounded bg-gray-800 text-white focus:outline-none"
          />
        </div>

        {/* Sign Up / Login */}
        <div className="ml-6 flex space-x-6">
          <Link
            to="/signup"
            className="text-[#00f2fe] text-lg transition-colors duration-300 hover:text-[#ff00ff]"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-[#00f2fe] text-lg transition-colors duration-300 hover:text-[#ff00ff]"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
