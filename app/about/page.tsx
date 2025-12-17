"use client";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Ashmith Yaramada",
      role: "CEO & Founder",
      description: "Passionate about creating educational games that make a difference.",
      skills: ["Game Development", "Unity", "C#"]
    },
    {
      name: "Taha Rawjani",
      role: "CTO & Co-Founder",
      description: "Focuses on creating engaging and educational gameplay experiences.",
      skills: ["Game Design", "Level Design", "UX"]
    },
    {
      name: "Pranav Divichenchi",
      role: "Operations Officer",
      description: "Specializes in marketing and management.",
      skills: ["Management", "Marketing", "Business Development"]
    },
    {
      name: "Arush Bodla",
      role: "Software Engineer",
      description: "Backend systems and infrastructure specialist.",
      skills: ["Web Development", "Backend", "APIs"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/20 via-[#ff0055]/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="arcade-font text-xs sm:text-sm neon-yellow mb-4 animate-pulse">
            ★ PLAYER INFO ★
          </div>
          <h1 className="arcade-font text-4xl sm:text-5xl md:text-7xl neon-red mb-6">
            ABOUT US
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl neon-blue mb-4">
            Building the Future of Educational Gaming
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="retro-border bg-[#0a0a1f]/80 backdrop-blur-md p-6 sm:p-8 pixel-corners scanlines mb-12 relative">
            <div className="absolute -top-3 left-4 bg-[#0a0a1f] px-3">
              <span className="arcade-font text-xs sm:text-sm neon-yellow">MISSION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold neon-blue mb-4 uppercase">Our Mission</h2>
            <p className="text-[#00ff88] text-base sm:text-lg leading-relaxed mb-4">
              Cognicade Studios was founded by a team of passionate developers who believe in the power of games to educate and inspire. What started as a collection of hackathon projects has evolved into a mission to create meaningful educational experiences through interactive gaming.
            </p>
            <p className="text-[#00d4ff] text-base sm:text-lg leading-relaxed">
              We combine cutting-edge technology, engaging gameplay, and educational content to make learning fun and accessible. Our games have been played across the globe, impacting students and educators alike.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="arcade-font text-2xl sm:text-4xl neon-yellow mb-2">
              ★ OUR TEAM ★
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#ffdd00] to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#0a0a1f]/80 backdrop-blur-sm border-4 border-[#00d4ff] hover:border-[#ff0055] p-6 pixel-corners glitch group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00d4ff]/50"
              >
                <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center border-4 border-[#ffdd00] bg-gradient-to-br from-[#00d4ff]/20 to-[#ff0055]/20 pixel-corners">
                  <span className="arcade-font text-2xl neon-red">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-bold neon-blue group-hover:neon-yellow text-center mb-2 uppercase transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-[#ff0055] text-center text-xs font-bold mb-3 uppercase">
                  {member.role}
                </p>
                <p className="text-[#00ff88] text-xs text-center mb-4">
                  {member.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-[#ffdd00]/20 border-2 border-[#ffdd00] text-xs text-[#ffdd00] font-bold uppercase"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="arcade-font text-2xl sm:text-4xl neon-yellow mb-2">
              ★ OUR VALUES ★
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#ffdd00] to-transparent"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="retro-border bg-[#0a0a1f]/80 backdrop-blur-sm p-8 text-center pixel-corners hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl sm:text-2xl font-bold neon-blue mb-3 uppercase">Innovation</h3>
              <p className="text-[#00ff88] text-sm sm:text-base">
                Pushing the boundaries of educational gaming with cutting-edge technology and creative gameplay.
              </p>
            </div>
            <div className="retro-border bg-[#0a0a1f]/80 backdrop-blur-sm p-8 text-center pixel-corners hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="text-xl sm:text-2xl font-bold neon-red mb-3 uppercase">Education</h3>
              <p className="text-[#00ff88] text-sm sm:text-base">
                Creating meaningful learning experiences that inspire and educate players of all ages.
              </p>
            </div>
            <div className="retro-border bg-[#0a0a1f]/80 backdrop-blur-sm p-8 text-center pixel-corners hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-xl sm:text-2xl font-bold neon-yellow mb-3 uppercase">Impact</h3>
              <p className="text-[#00ff88] text-sm sm:text-base">
                Making the world a better place, one game at a time, reaching players across the globe.
              </p>
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
