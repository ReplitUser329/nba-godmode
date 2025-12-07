"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchTeams } from "../../utils/api";

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function loadTeams() {
      const data = await fetchTeams();
      setTeams(data);
    }
    loadTeams();
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-futuristic text-neonBlue mb-4">NBA Teams</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teams.map((team) => (
          <Link
            key={team.id}
            href={`/teams/${team.id}`}
            className="card hover:scale-105 transition-transform"
          >
            <h2 className="text-neonPink text-2xl font-bold">{team.full_name}</h2>
            <p className="text-white/80">{team.city}</p>
            <p className="text-white/60">{team.abbreviation}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
import { fetchTeamById } from "../../../utils/api";

export default async function TeamPage({ params }) {
  const { id } = params;
  const team = await fetchTeamById(id);

  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-futuristic text-neonBlue">{team.full_name}</h1>
      <p className="text-white/80">City: {team.city}</p>
      <p className="text-white/80">Conference: {team.conference}</p>
      <p className="text-white/80">Division: {team.division}</p>
      <p className="text-white/80">Abbreviation: {team.abbreviation}</p>
    </div>
  );
}
