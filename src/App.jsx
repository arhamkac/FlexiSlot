import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

import AboutUs from './components/AboutUs';
import BookingPage from './components/BookingPage';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Router>
      <div className="bg-[#0a0a0a] text-white font-sans w-full h-full overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <BookingSection />
              </>
            }
          />

          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactUs />} />

          {/* New routes for authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
