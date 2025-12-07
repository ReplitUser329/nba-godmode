const BASE_URL = "https://www.balldontlie.io/api/v1";

export async function fetchPlayers(page = 1, perPage = 25) {
  const res = await fetch(`${BASE_URL}/players?page=${page}&per_page=${perPage}`);
  const data = await res.json();
  return data;
}

export async function fetchPlayerById(id) {
  const res = await fetch(`${BASE_URL}/players/${id}`);
  const data = await res.json();
  return data;
}

export async function fetchTeams() {
  const res = await fetch(`${BASE_URL}/teams`);
  const data = await res.json();
  return data.data;
}

export async function fetchTeamById(id) {
  const res = await fetch(`${BASE_URL}/teams/${id}`);
  const data = await res.json();
  return data;
}

export async function fetchGames(page = 1, perPage = 25) {
  const res = await fetch(`${BASE_URL}/games?page=${page}&per_page=${perPage}`);
  const data = await res.json();
  return data;
}

export async function fetchGameById(id) {
  const res = await fetch(`${BASE_URL}/games/${id}`);
  const data = await res.json();
  return data;
}
