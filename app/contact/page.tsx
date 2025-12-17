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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/20 via-[#ff0055]/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="arcade-font text-xs sm:text-sm neon-yellow mb-4 animate-pulse">
            ★ COMMUNICATIONS TERMINAL ★
          </div>
          <h1 className="arcade-font text-4xl sm:text-5xl md:text-7xl neon-red mb-6">
            CONTACT US
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl neon-blue mb-4">
            Get in Touch with Cognicade Studios
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="retro-border bg-[#0a0a1f]/80 backdrop-blur-md p-6 sm:p-8 pixel-corners scanlines">
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 neon-green">✓</div>
                <h2 className="arcade-font text-2xl sm:text-3xl neon-yellow mb-4">
                  MESSAGE SENT!
                </h2>
                <p className="text-[#00ff88] text-base sm:text-lg">
                  Your message has been received. We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-[#ffdd00] font-bold mb-2 uppercase text-sm">
                    ▸ Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-[#00d4ff] text-[#00d4ff] focus:outline-none focus:border-[#ff0055] focus:shadow-[0_0_10px_rgba(255,0,85,0.5)] transition-all"
                    placeholder="Player Name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-[#ffdd00] font-bold mb-2 uppercase text-sm">
                    ▸ Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-[#00d4ff] text-[#00d4ff] focus:outline-none focus:border-[#ff0055] focus:shadow-[0_0_10px_rgba(255,0,85,0.5)] transition-all"
                    placeholder="player@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-[#ffdd00] font-bold mb-2 uppercase text-sm">
                    ▸ Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border-2 border-[#00d4ff] text-[#00d4ff] focus:outline-none focus:border-[#ff0055] focus:shadow-[0_0_10px_rgba(255,0,85,0.5)] transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#ffdd00] font-bold mb-2 uppercase text-sm">
                    ▸ Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border-2 border-[#00d4ff] text-[#00d4ff] focus:outline-none focus:border-[#ff0055] focus:shadow-[0_0_10px_rgba(255,0,85,0.5)] transition-all resize-vertical"
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full arcade-button text-base sm:text-lg uppercase"
                >
                  ▶ SEND MESSAGE ◀
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0a0a1f]/80 backdrop-blur-sm border-4 border-[#00d4ff] p-6 text-center pixel-corners hover:border-[#ff0055] hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">📧</div>
              <h3 className="text-lg font-bold neon-yellow mb-2 uppercase">Email</h3>
              <p className="text-[#00d4ff] text-sm">cognicadestudios@gmail.com</p>
            </div>
            <div className="bg-[#0a0a1f]/80 backdrop-blur-sm border-4 border-[#00d4ff] p-6 text-center pixel-corners hover:border-[#ff0055] hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🐙</div>
              <h3 className="text-lg font-bold neon-yellow mb-2 uppercase">GitHub</h3>
              <a
                href="https://github.com/CognicadeStudios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d4ff] hover:text-[#ff0055] transition-colors text-sm"
              >
                @CognicadeStudios
              </a>
            </div>
            <div className="bg-[#0a0a1f]/80 backdrop-blur-sm border-4 border-[#00d4ff] p-6 text-center pixel-corners hover:border-[#ff0055] hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🌍</div>
              <h3 className="text-lg font-bold neon-yellow mb-2 uppercase">Location</h3>
              <p className="text-[#00d4ff] text-sm">Virginia, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a1f]/90 border-t-4 border-[#00d4ff] mt-20 py-8 relative overflow-hidden">
        <div className="absolute inset-0 scanlines opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="arcade-font text-xs neon-blue mb-3">
            GAME OVER
          </div>
          <p className="text-[#00ff88] text-sm mb-2">
            &copy; 2024 <span className="neon-red font-bold">COGNICADE STUDIOS</span>
          </p>
          <p className="text-[#00d4ff]/80 text-xs">
            Making the world a better place, one game at a time
          </p>
          <div className="mt-4 arcade-font text-xs neon-yellow animate-pulse">
            ★ PRESS START TO CONTINUE ★
          </div>
        </div>
      </footer>
    </div>
  );
}
