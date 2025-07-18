import React, { useState } from "react";

export default function HomePage() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Gallery", "Location", "Contact"];

  return (
    <main className="relative text-gray-800 font-outfit scroll-smooth">
      <div className="relative z-10">
        {/* Header / Navbar */}
        <header className="bg-[#2b6777] shadow-lg sticky top-0 z-50 opacity-98">
          <div className="container mx-auto flex justify-between items-center px-6 lg:px-20 py-4 ">
            <div className="flex items-center">
              <img src="/logo.png" alt="KPT Auto Park Logo" className="h-10 w-auto" />
            </div>

            {/* Desktop nav */}
            <nav className="space-x-6 hidden md:flex">
              {navLinks.map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="text-[#f2f2f2] hover:text-white font-medium text-base transition duration-200"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile nav menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-[#2b6777] px-6 pb-4 space-y-2">
              {navLinks.map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="block text-white font-medium text-base hover:text-[#81e6d9]"
                  onClick={() => setMenuOpen(false)} // close menu on click
                >
                  {label}
                </a>
              ))}
            </nav>
          )}
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("/jai.png")' }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="container relative mx-auto px-4 sm:px-6 md:px-10 lg:px-20 max-w-full lg:max-w-5xl text-center lg:text-left z-10">
            <p className="text-sm text-[#81e6d9] font-semibold uppercase mb-2">
              Get Every Single Solution
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              KPT Auto Park
            </h1>
            <p className="text-white text-lg mb-6">
              Affordable & Reliable Auto Rickshaw Services in the City.
              <br /> Operating from 5:00 AM to 10:30 PM across
              <br />
              Udupi, Bangalore, Kerala, Surathkal, and Statebank.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#about"
                className="inline-block bg-[#2b6777] hover:bg-[#469e8e] text-white font-semibold py-2 px-4 rounded"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen py-20 px-6 lg:px-20 bg-[#c8d8e4]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2b6777] mb-4">About Park</h2>
            <p className="text-[#2b6777] max-w-2xl mx-auto mb-12">
              KPT Auto Park has been serving the city for over 20 years with 15 dedicated auto rickshaws. Sponsored by the
              Lions Club of Ashok Nagar, we are committed to safe, affordable, and eco-conscious transport across the city.
              We proudly celebrate Independence Day and Republic Day every year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["/img1.jpg", "/img2.jpg", "/img3.jpg"].map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={src}
                    alt={`About ${index + 1}`}
                    className="w-full h-[250px] object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen py-20 px-6 lg:px-20 bg-[#f2f2f2]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2b6777] mb-10">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Daily Rentals", img: "/services1.jpg" },
                { title: "Long-Distance Hires", img: "/services2.jpg" },
                { title: "Women-Only Autos", img: "/services3.jpg" },
                { title: "Tourist Rides", img: "/services4.jpg" },
                { title: "GPS Enabled Safety", img: "/services5.jpg" },
                { title: "Meter-Based Charges", img: "/services6.jpg" },
              ].map((service, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 border border-[#c8d8e4]"
                >
                  <div className="overflow-hidden rounded mb-4">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-40 object-cover transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[#2b6777] mb-2">{service.title}</h3>
                  <p className="text-[#2b6777] text-sm">
                    Reliable and affordable service tailored to your daily transport needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="min-h-screen pt-20 pb-12 px-6 lg:px-20 bg-[#ffffff]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2b6777] mb-10">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  img: "/side.jpg",
                  title: "Auto Stand Front View",
                  desc: "A clean and well-organized entrance to the Tulunada Rickshaw Park.",
                },
                {
                  img: "/name.jpg",
                  title: "Named After the Region",
                  desc: "Proudly named after the KPT region, our stand represents the local community spirit.",
                },
                {
                  img: "/driver.jpg",
                  title: "Friendly & Experienced Drivers",
                  desc: "Meet one of our trusted drivers – known for his friendly nature, professionalism, and years of experience.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f2f2f2] p-4 rounded-lg shadow hover:shadow-md transition duration-300"
                >
                  <div className="overflow-hidden rounded mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-semibold text-[#2b6777]">{item.title}</h4>
                  <p className="text-[#2b6777] text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location & Map Section */}
        <section id="location" className="min-h-screen py-20 px-6 lg:px-20 bg-[#c8d8e4]">
          <div className="container mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold text-[#2b6777] mb-4">Where to Find Us</h2>
            <p className="text-[#2b6777] mb-4">
              Located at the main bypass connecting Udupi, Bangalore, Kerala, Surathkal, and Statebank.
            </p>
            <p className="text-[#2b6777] font-semibold">Open Daily: 5:00 AM – 10:30 PM</p>
          </div>

          <div className="container mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="KPT Auto Park Location Map"
              className="w-full h-[450px] border-0"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d549.5358916731315!2d74.85476768175587!3d12.891034275501484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bb0cbda1d7b%3A0x3dfca3e7831c2fa7!2sTulunad%20Riksha%20Park%2C%20KPT!5e1!3m2!1sen!2sin!4v1752761842609!5m2!1sen!2sin"
            ></iframe>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 px-6 lg:px-20 bg-[#ffffff]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#2b6777] mb-6">Get In Touch</h2>
            <p className="text-[#2b6777] mb-6">Call us or fill out the form and we’ll get back to you promptly.</p>
            <form className="max-w-xl mx-auto space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-[#c8d8e4] p-3 rounded"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-[#c8d8e4] p-3 rounded"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full border border-[#c8d8e4] p-3 rounded"
              ></textarea>
              <button className="bg-[#52ab98] text-white w-full py-3 rounded hover:bg-[#469e8e] transition">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#2b6777] text-center py-6 mt-10 text-white">
          <div>© 2025 KPT Auto Park. All rights reserved.</div>
          <div className="mt-2 text-sm">
            Credits: Koushik M, Akash Poojary, Yashas B, Anish Shettigar
          </div>
        </footer>
      </div>
    </main>
  );
}
