"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-darkBg shadow-lg p-4 flex justify-between items-center">
      <div className="text-neonBlue text-2xl font-futuristic font-bold">
        GOD-MODE NBA
      </div>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-neonPink">Home</Link>
        </li>
        <li>
          <Link href="/teams" className="hover:text-neonPink">Teams</Link>
        </li>
        <li>
          <Link href="/players" className="hover:text-neonPink">Pla
