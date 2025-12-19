"use client";

const games = [
  {
    title: "EcoSpark",
    description: "Educational Climate Change Management Game",
    longDescription: "Built for the 2024 Congressional App Challenge, Virginia District 10. An educational game that teaches players about climate change through city management and energy resource balancing.",
    image: "/ecoSparkPreview.png",
    link: "https://pranavdivichenchu.wixstudio.com/main/blank-2",
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
    title: "The FACTory",
    description: "Corporate Espionage Game: Truth vs. Misinformation",
    longDescription: "You are a new content moderator at 'Fact,' a company dedicated to uncovering truth amidst misinformation. Protect Fact from its chaotic rival, 'Fibble.' What starts as a simple job of flagging fake news soon reveals itself to be a secret corporate sabotage campaign. Will you be able to find the truth among the lies?",
    image: "/theFACToryPreview.png",
    link: "https://big-small-games.itch.io/the-factory",
    features: [
      "Made for GMU ASSIP 2025 & VGSI",
      "Various educational minigames",
      "Hidden story about corporate sabotage and truth-seeking"
    ],
    technologies: [
      { name: "C#", color: "purple" },
      { name: "Unity", color: "blue" },
      { name: "Game Dev", color: "green" },
      { name: "Education", color: "orange" }
    ]
  },
  {
    title: "plundr.io",
    description: "Pirate-Themed Multiplayer Strategy Game",
    longDescription: "A competitive multiplayer game where players take on the role of pirates, competing for treasure and territory in a dynamic ocean environment.",
    image: "/plundrIOPreview.png",
    link: "https://ashmithry.github.io/Plundr.io-Game/",
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
    link: "https://2900xt.github.io/bread2dough-build/",
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
      "Three core mechanics: grappling, hacking, blasting",
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
  purple: "bg-purple-100 text-purple-700 border border-purple-200",
  blue: "bg-blue-100 text-blue-700 border border-blue-200",
  green: "bg-green-100 text-green-700 border border-green-200",
  orange: "bg-amber-100 text-amber-700 border border-amber-200"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 text-white pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Cognicade Studios
          </h1>
          <p className="text-xl sm:text-2xl mb-4 text-white drop-shadow-md">
            Creating Learning-Based Interactive Games
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 sm:gap-16 mb-12 flex-wrap">
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[140px]">
              <div className="text-4xl font-bold mb-2 text-white drop-shadow-lg">500+</div>
              <div className="text-white text-sm font-semibold">Students Reached</div>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[140px]">
              <div className="text-4xl font-bold mb-2 text-white drop-shadow-lg">5+</div>
              <div className="text-white text-sm font-semibold">Hackathons Won</div>
            </div>
            <div className="text-center bg-white/20 backdrop-blur-sm rounded-lg p-4 min-w-[140px]">
              <div className="text-4xl font-bold mb-2 text-white drop-shadow-lg">10+</div>
              <div className="text-white text-sm font-semibold">Games Created</div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg leading-relaxed text-white drop-shadow-md">
              Initially an archive for our hackathon projects, this website now hosts Cognicade Studios&apos; latest educational games. We use our talent to develop educational video games to make the world a better place, one game at a time.
            </p>
          </div>
        </div>
      </section>



      {/* Testimonial Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="card p-8 sm:p-12 max-w-5xl mx-auto border-t-4 border-orange-500 shadow-xl shadow-orange-100">
            <div className="text-center mb-8">
              <svg className="w-12 h-12 text-orange-500 mx-auto mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-2.2 1.8-4 4-4V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-2.2 1.8-4 4-4V8z" />
              </svg>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 italic">
                "The students in my FUSION class were absolutely captivated by EcoSpark! It was incredible to see them so engaged while learning about environmental science. They didn&apos;t just play the game – they started real conversations about climate change, energy resources, and sustainability. This is exactly the kind of educational tool we need in our classrooms today."
              </p>

              <div className="text-center">
                <p className="font-bold text-gray-900 text-lg mb-1">Ariel Fitzsimmons</p>
                <p className="text-orange-600 text-sm font-medium">FUSION Program Teacher</p>
                <p className="text-gray-500 text-sm">Creighton&apos;s Corner Elementary School</p>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="rounded-lg overflow-hidden shadow-md border-2 border-orange-200 hover:border-orange-500 transition-all duration-300">
                <img
                  src="/TEST_1.jpg"
                  alt="Students playing EcoSpark"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md border-2 border-orange-200 hover:border-orange-500 transition-all duration-300">
                <img
                  src="/TEST_2.jpg"
                  alt="Students enjoying the game"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md border-2 border-orange-200 hover:border-orange-500 transition-all duration-300">
                <img
                  src="/TEST_3.jpg"
                  alt="Classroom presentation"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>{/* Games Grid */}
      <section className="section bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4">
              Our Games
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our collection of educational and entertaining games designed to inspire learning and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <div
                key={index}
                className="card overflow-hidden group hover:border-t-4 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-200"
              >
                {/* Game Image */}
                <div className="relative h-56 bg-gradient-to-br from-yellow-400 to-orange-600 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
                    {game.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {game.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-orange-600 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {game.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          <span className="flex-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {game.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${techColors[tech.color as keyof typeof techColors]
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
                    className="block w-full text-center btn-primary"
                  >
                    Play Now
                  </a>
                </div>
              </div>
            ))}
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
