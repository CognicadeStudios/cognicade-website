"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFD700] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors duration-200">
              <img
                src="/cognicade_logo.png"
                alt="Cognicade Studios Logo"
                className="h-12 w-12"
              />
            </Link>
          </div>
          <div className="flex space-x-2 sm:space-x-4">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                isActive("/")
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-900 hover:bg-black/10"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                isActive("/about")
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-900 hover:bg-black/10"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                isActive("/contact")
                  ? "bg-gray-900 text-white shadow-md"
                  : "text-gray-900 hover:bg-black/10"
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
