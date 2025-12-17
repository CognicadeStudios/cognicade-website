"use client";

const games = [
  {
    title: "EcoSpark",
    description: "Educational Climate Change Management Game",
    longDescription: "Built for the 2024 Congressional App Challenge, Virginia District 10. An educational game that teaches players about climate change through city management and energy resource balancing.",
    image: "/ecoSparkPreview.png",
    link: "https://github.com/CognicadeStudios/EcoSpark",
    features: [
      "Educational climate change simulation",
      "City management and energy resource balancing",
      "Contract system with AI-powered negotiations",
      "Research upgrades and eco-friendly housing options"
    ],
    technologies: [
      { name: "C#", color: "purple" },
      { name: "Unity", color: "blue" },
      { name: "Game Dev", color: "green" },
      { name: "AI", color: "orange" }
    ]
  },
  {
    title: "WinterWarzone",
    description: "Multiplayer Winter Combat Game",
    longDescription: "A multiplayer combat game set in a winter environment with strategic gameplay and team-based mechanics.",
    image: "/winterWarzonePreview.png",
    link: "https://github.com/2900xt/WinterWarzone",
    features: [
      "Multiplayer combat mechanics",
      "Winter-themed environment and gameplay",
      "Strategic team-based combat",
      "Real-time multiplayer networking"
    ],
    technologies: [
      { name: "Game Dev", color: "green" },
      { name: "Multiplayer", color: "blue" },
      { name: "Networking", color: "purple" }
    ]
  },
  {
    title: "Grading Hat",
    description: "AI-Powered Grading Assistant",
    longDescription: "An intelligent grading system that uses AI to assist educators in evaluating student work efficiently and consistently.",
    image: "/gradingHatPreview.png",
    link: "https://github.com/2900xt/Grading-Hat",
    features: [
      "AI-powered grading assistance",
      "Consistent evaluation standards",
      "Educational workflow integration",
      "Automated feedback generation"
    ],
    technologies: [
      { name: "AI/ML", color: "orange" },
      { name: "Education", color: "blue" },
      { name: "Automation", color: "green" }
    ]
  },
  {
    title: "plundr.io",
    description: "Pirate-Themed Multiplayer Strategy Game",
    longDescription: "A competitive multiplayer game where players take on the role of pirates, competing for treasure and territory in a dynamic ocean environment.",
    image: "/plundrIOPreview.png",
    link: "https://devpost.com/software/plundr-io",
    features: [
      "Pirate-themed multiplayer gameplay",
      "Treasure hunting and territory control",
      "Real-time strategy elements",
      "Competitive multiplayer mechanics"
    ],
    technologies: [
      { name: "Game Dev", color: "green" },
      { name: "Multiplayer", color: "blue" },
      { name: "Strategy", color: "purple" }
    ]
  },
  {
    title: "Bread to Dough",
    description: "Bread Tycoon Game with Prestige System",
    longDescription: "A bread tycoon game where players farm resources and build automated factories to create bread. Features a prestige system with 5 bread tiers and hand-drawn assets.",
    image: "/bread2DoughPreview.png",
    link: "https://devpost.com/software/bread-to-dough",
    features: [
      "Prestige system with 5 bread tiers",
      "Automated bread factories",
      "Resource farming mechanics",
      "Hand-drawn assets and cutscenes"
    ],
    technologies: [
      { name: "C#", color: "purple" },
      { name: "Unity", color: "blue" },
      { name: "Game Dev", color: "green" },
      { name: "HTML", color: "orange" }
    ]
  },
  {
    title: "The Rookie",
    description: "First-Person Spy Platformer with Simulation Twist",
    longDescription: "A first-person platformer inspired by Karlson and Portal where players use grappling, hacking, and energy blasting mechanics through a BURP device. Features a plot twist where the entire game is revealed to be a spy simulation test that players must escape.",
    image: "/theRookie.png",
    link: "https://devpost.com/software/the-rookie",
    features: [
      "Three core mechanics: grappling, hacking, energy blasting",
      "BURP device (Universal Radiocarpal Piece)",
      "Simulation twist and escape storyline",
      "3 levels with hidden escape codes"
    ],
    technologies: [
      { name: "C#", color: "purple" },
      { name: "Unity", color: "blue" },
      { name: "Game Dev", color: "green" }
    ]
  }
];

const techColors = {
  purple: "bg-purple-600/80 text-white border-2 border-purple-400",
  blue: "bg-blue-600/80 text-white border-2 border-blue-400",
  green: "bg-green-600/80 text-white border-2 border-green-400",
  orange: "bg-orange-600/80 text-white border-2 border-orange-400"
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#00d4ff]/20 via-[#ff0055]/10 to-transparent"></div>

        {/* Arcade Cabinet Frame */}
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="retro-border bg-[#0a0a1f]/80 backdrop-blur-md p-6 sm:p-12 pixel-corners scanlines">
            {/* Insert Coin Animation */}
            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block arcade-font text-xs sm:text-sm neon-yellow animate-pulse">
                ★ INSERT COIN ★
              </div>
            </div>

            {/* Main Title */}
            <h1 className="arcade-font text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center mb-4 sm:mb-8 leading-tight">
              <span className="neon-red block mb-2 sm:mb-4">COGNICADE</span>
              <span className="neon-blue block text-xl sm:text-3xl md:text-4xl">STUDIOS</span>
            </h1>

            {/* Score Display */}
            <div className="flex justify-center gap-4 sm:gap-8 mb-6 sm:mb-10 flex-wrap">
              <div className="text-center">
                <div className="text-[#00d4ff] text-xs sm:text-sm mb-1">1UP</div>
                <div className="neon-yellow arcade-font text-sm sm:text-lg">006</div>
              </div>
              <div className="text-center">
                <div className="text-[#ff0055] text-xs sm:text-sm mb-1">HIGH SCORE</div>
                <div className="neon-yellow arcade-font text-sm sm:text-lg">999999</div>
              </div>
              <div className="text-center">
                <div className="text-[#00ff88] text-xs sm:text-sm mb-1">GAMES</div>
                <div className="neon-yellow arcade-font text-sm sm:text-lg">PLAYED</div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="max-w-3xl mx-auto mb-8 sm:mb-12">
              <div className="bg-black/50 border-4 border-[#ffdd00] p-4 sm:p-6 relative">
                <div className="absolute -top-3 left-4 bg-[#0a0a1f] px-3">
                  <span className="text-[#ffdd00] font-bold text-xs sm:text-sm">MISSION</span>
                </div>
                <p className="text-[#00d4ff] text-sm sm:text-lg leading-relaxed text-center">
                  Creating <span className="neon-red font-bold">Learning-Based</span> Interactive Games
                </p>
                <p className="text-[#00ff88] text-xs sm:text-base mt-3 sm:mt-4 leading-relaxed">
                  Initially an archive for our hackathon projects, this website now hosts Cognicade Studios&apos; latest educational games. We use our talent to develop educational video games to make the world a better place, <span className="neon-yellow">one game at a time</span>.
                </p>
              </div>
            </div>

            {/* Start Button */}
            <div className="text-center">
              <div className="inline-block arcade-button px-8 sm:px-12 py-3 sm:py-4 text-white font-bold text-sm sm:text-lg uppercase cursor-pointer">
                ▼ START GAME ▼
              </div>
              <div className="mt-4 text-[#00d4ff]/60 text-xs sm:text-sm">
                ◄ SCROLL DOWN TO VIEW GAMES ►
              </div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute -top-2 -left-2 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-l-4 border-[#ff0055]"></div>
          <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-r-4 border-[#ffdd00]"></div>
          <div className="absolute -bottom-2 -left-2 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-l-4 border-[#00ff88]"></div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-r-4 border-[#00d4ff]"></div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="arcade-font text-2xl sm:text-4xl neon-yellow mb-2">
                ★ GAME SELECT ★
              </h2>
              <div className="h-1 bg-gradient-to-r from-transparent via-[#ffdd00] to-transparent"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div
                key={index}
                className="bg-[#0a0a1f]/80 backdrop-blur-sm border-4 border-[#00d4ff] hover:border-[#ff0055] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#00d4ff]/50 pixel-corners glitch group"
              >
                {/* Game Image */}
                <div className="relative h-48 bg-black overflow-hidden border-b-4 border-[#ffdd00]">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 arcade-font text-xs neon-blue">
                    LVL {index + 1}
                  </div>
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold neon-blue group-hover:neon-red transition-all duration-300 mb-2 uppercase">
                    {game.title}
                  </h3>
                  <p className="text-[#00ff88] text-sm mb-4">{game.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-[#ffdd00] mb-2 uppercase">▸ Features:</h4>
                    <ul className="text-xs text-[#00d4ff] space-y-1">
                      {game.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#ff0055] mr-2">►</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs font-bold text-[#ffdd00] mb-2 uppercase">▸ Tech:</h4>
                    <div className="flex flex-wrap gap-2">
                      {game.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-2 py-1 text-xs font-bold uppercase ${
                            techColors[tech.color as keyof typeof techColors]
                          }`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Play Button */}
                  <a
                    href={game.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full arcade-button text-center text-sm uppercase"
                  >
                    ▶ PLAY NOW ◀
                  </a>
                </div>
              </div>
            ))}
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
