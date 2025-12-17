"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a1f]/90 backdrop-blur-sm border-b-4 border-[#00d4ff] scanlines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 text-xl font-bold neon-blue hover:neon-red transition-all duration-300 glitch">
              <img
                src="/cognicade_logo.png"
                alt="Cognicade Studios Logo"
                className="h-12 w-12 drop-shadow-[0_0_15px_rgba(0,212,255,0.8)]"
              />
              <span className="hidden sm:inline arcade-font text-sm">COGNICADE</span>
            </Link>
          </div>
          <div className="flex space-x-2 sm:space-x-6">
            <Link
              href="/"
              className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase transition-all duration-200 ${
                isActive("/")
                  ? "neon-red bg-[#ff0055]/20 border-2 border-[#ff0055] pixel-corners"
                  : "text-[#00d4ff] hover:neon-yellow border-2 border-transparent hover:border-[#ffdd00]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase transition-all duration-200 ${
                isActive("/about")
                  ? "neon-red bg-[#ff0055]/20 border-2 border-[#ff0055] pixel-corners"
                  : "text-[#00d4ff] hover:neon-yellow border-2 border-transparent hover:border-[#ffdd00]"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 text-xs sm:text-sm font-bold uppercase transition-all duration-200 ${
                isActive("/contact")
                  ? "neon-red bg-[#ff0055]/20 border-2 border-[#ff0055] pixel-corners"
                  : "text-[#00d4ff] hover:neon-yellow border-2 border-transparent hover:border-[#ffdd00]"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
