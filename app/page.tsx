export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-8 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">Milly AI</h1>
          <p className="text-3xl text-gray-300 mb-4">
            Arrive dinner on time.
          </p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Multi-dish orchestration with live ETA, turn-by-turn voice, 
            and automatic re-routing when reality changes.
          </p>
        </div>

        {/* The Promise */}
        <div className="bg-blue-900/30 border-2 border-blue-600 rounded-lg p-8 mb-8">
          <p className="text-2xl font-semibold text-center mb-2">
            🎯 Your finish time is non-negotiable.
          </p>
          <p className="text-lg text-center text-gray-300">
            We back-schedule everything, coordinate resources, 
            and re-plan on the fly to hit your target ±2 minutes.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="/auth" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold px-12 py-4 rounded-lg transition"
          >
            Start Cooking →
          </a>
        </div>
      </div>
    </main>
  )
}