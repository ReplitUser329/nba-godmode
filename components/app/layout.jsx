import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "GOD-MODE NBA",
  description: "All NBA stats, players, teams, and games in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
