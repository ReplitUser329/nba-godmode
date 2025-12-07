"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchPlayers } from "../../utils/api";

export default function PlayersPage() {
  const [players, setPlayers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPlayers() {
      const data = await fetchPlayers(page, 25);
      setPlayers(data.data);
    }
    loadPlayers();
  }, [page]);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-futuristic text-neonBlue mb-4">NBA Players</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {players.map((player) => (
          <Link
            key={player.id}
            href={`/players/${player.id}`}
            className="card hover:scale-105 transition-transform"
          >
            <h2 className="text-neonPink text-2xl font-bold">
              {player.first_name} {player.last_name}
            </h2>
            <p className="text-white/80">{player.team.full_name}</p>
            <p className="text-white/60">{player.position || "N/A"}</p>
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
import { fetchPlayerById } from "../../../utils/api";

export default async function PlayerPage({ params }) {
  const { id } = params;
  const player = await fetchPlayerById(id);

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-futuristic text-neonBlue">
        {player.first_name} {player.last_name}
      </h1>
      <p className="text-white/80">Team: {player.team.full_name}</p>
      <p className="text-white/80">Position: {player.position || "N/A"}</p>
      <p className="text-white/80">Height: {player.height_feet || "-"}' {player.height_inches || "-"}</p>
      <p className="text-white/80">Weight: {player.weight_pounds || "-"}</p>
    </div>
  );
}
