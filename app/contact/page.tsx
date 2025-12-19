"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-white drop-shadow-md">
            Get in Touch with Cognicade Studios
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 sm:p-12 border-t-4 border-orange-500 shadow-xl shadow-orange-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 text-green-500">✓</div>
                <h2 className="text-3xl font-bold text-orange-600 mb-4">
                  Message Sent!
                </h2>
                <p className="text-gray-600 text-lg">
                  Your message has been received. We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-orange-600 font-bold mb-2 text-sm">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-orange-600 font-bold mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-orange-600 font-bold mb-2 text-sm">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-orange-600 font-bold mb-2 text-sm">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-vertical"
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6 text-center hover:border-t-4 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-200">
              <div className="text-5xl mb-3">📧</div>
              <h3 className="text-lg font-bold text-orange-600 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">cognicadestudios@gmail.com</p>
            </div>
            <div className="card p-6 text-center hover:border-t-4 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-200">
              <div className="text-5xl mb-3">🐙</div>
              <h3 className="text-lg font-bold text-orange-600 mb-2">GitHub</h3>
              <a
                href="https://github.com/CognicadeStudios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-orange-600 transition-colors text-sm"
              >
                @CognicadeStudios
              </a>
            </div>
            <div className="card p-6 text-center hover:border-t-4 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-200">
              <div className="text-5xl mb-3">🌍</div>
              <h3 className="text-lg font-bold text-orange-600 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Virginia, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-3 drop-shadow-lg">Cognicade Studios</h3>
          <p className="text-white/90 mb-6">
            Making the world a better place, one game at a time
          </p>
          <div className="border-t border-white/20 pt-6 mt-6">
            <p className="text-white/80 text-sm">
              &copy; 2024 Cognicade Studios. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
