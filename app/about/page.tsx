"use client";

import { useRouter } from "next/navigation";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Ashmith Yaramada",
      role: "CEO & Founder",
      description: "Passionate about creating educational games that make a difference.",
      skills: ["Game Development", "Unity", "C#"],
      website: "https://ashmithyaramada.com",
      pfp: "/ary.jpg"
    },
    {
      name: "Taha Rawjani",
      role: "CTO & Co-Founder",
      description: "Focuses on creating engaging and educational gameplay experiences.",
      skills: ["Game Design", "Level Design", "UX"],
      website: "https://taharawjani.org",
      pfp: "/tr.jpg"
    },
    {
      name: "Pranav Divichenchi",
      role: "COO & Co-Founder",
      description: "Specializes in marketing and management.",
      skills: ["Management", "Marketing", "Business Development"],
      website: "https://pranav.com",
      pfp: "/pdubs.jpg"
    },
    {
      name: "Arush Bodla",
      role: "CIO & Co-Founder",
      description: "Backend systems and infrastructure specialist.",
      skills: ["Web Development", "Backend", "APIs"],
      website: "https://arush.com",
      pfp: "/ab.jpg"
    }
  ];

  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 text-white pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-white drop-shadow-md">
            Building the Future of Educational Gaming
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 sm:p-12 border-t-4 border-orange-500 shadow-xl shadow-orange-100">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Cognicade Studios was founded by a team of passionate developers who believe in the power of games to educate and inspire. What started as a collection of hackathon projects has evolved into a mission to create meaningful educational experiences through interactive gaming.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We combine cutting-edge technology, engaging gameplay, and educational content to make learning fun and accessible. Our games have been played across the globe, impacting students and educators alike.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
              Our Team
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <button
                key={index}
                onClick={() => window.open(member.website, '_blank')}
                className="card p-6 hover:border-t-4 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-200 cursor-pointer group"
              >
                <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center border-4 border-orange-400 rounded-full overflow-hidden bg-gradient-to-br from-yellow-100 to-orange-100">
                  {member.pfp ? (
                    <img
                      src={member.pfp}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-2xl font-bold text-orange-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 text-center mb-2 group-hover:text-orange-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-orange-600 text-center text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm text-center mb-4">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-orange-100 border border-orange-300 text-xs text-orange-700 font-semibold rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
              Our Values
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center hover:border-t-4 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-200">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold text-orange-600 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Pushing the boundaries of educational gaming with cutting-edge technology and creative gameplay.
              </p>
            </div>
            <div className="card p-8 text-center hover:border-t-4 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:shadow-orange-200">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-bold text-orange-600 mb-3">Education</h3>
              <p className="text-gray-600">
                Creating meaningful learning experiences that inspire and educate players of all ages.
              </p>
            </div>
            <div className="card p-8 text-center hover:border-t-4 hover:border-red-400 transition-all duration-300 hover:shadow-xl hover:shadow-red-200">
              <div className="text-6xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-orange-600 mb-3">Impact</h3>
              <p className="text-gray-600">
                Making the world a better place, one game at a time, reaching players across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
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
