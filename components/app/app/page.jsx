"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-10">
      <h1 className="text-6xl font-futuristic text-neonBlue">
        GOD-MODE NBA
      </h1>
      <p className="text-white/80 text-xl max-w-xl">
        Your ultimate NBA hub. Browse all teams, players, games, and stats in one futuristic interface.
      </p>
      <div className="flex space-x-6">
        <Link href="/teams" className="px-6 py-3 bg-neonBlue rounded-lg hover:bg-neonPink transition-colors">
          Teams
        </Link>
        <Link href="/players" className="px-6 py-3 bg-neonBlue rounded-lg hover:bg-neonPink transition-colors">
          Players
        </Link>
        <Link href="/games" className="px-6 py-3 bg-neonBlue rounded-lg hover:bg-neonPink transition-colors">
          Games
        </Link>
      </div>
    </div>
  );
}
