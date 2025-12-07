"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchGames } from "../../utils/api";

export default function GamesPage() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadGames() {
      const data = await fetchGames(page, 25);
      setGames(data.data);
    }
    loadGames();
  }, [page]);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-futuristic text-neonBlue mb-4">NBA Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.id}`}
            className="card hover:scale-105 transition-transform"
          >
            <p className="text-white/80">
              {game.home_team.full_name} vs {game.visitor_team.full_name}
            </p>
            <p className="text-white/60">Date: {new Date(game.date).toLocaleDateString()}</p>
            <p className="text-white/60">
              Score: {game.home_team_score} - {game.visitor_team_score}
            </p>
          </Link>
        ))}
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-neonBlue rounded-lg hover:bg-neonPink transition-colors disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-neonBlue rounded-lg hover:bg-neonPink transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
import { fetchGameById } from "../../../utils/api";

export default async function GamePage({ params }) {
  const { id } = params;
  const game = await fetchGameById(id);

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-futuristic text-neonBlue">
        {game.home_team.full_name} vs {game.visitor_team.full_name}
      </h1>
      <p className="text-white/80">Date: {new Date(game.date).toLocaleDateString()}</p>
      <p className="text-white/80">
        Score: {game.home_team_score} - {game.visitor_team_score}
      </p>
      <p className="text-white/80">Season: {game.season}</p>
      <p className="text-white/80">Period: {game.period}</p>
      <p className="text-white/80">Status: {game.status}</p>
    </div>
  );
}
