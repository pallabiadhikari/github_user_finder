import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import RepoList from "./components/RepoList";
import History from "./components/History";
import Loader from "./components/Loader";

function App() {
  const [query, setQuery] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!username) return;

    const fetchData = async () => {
      setLoading(true);
      setError("");

      try {
        const userRes = await fetch(
          `https://api.github.com/users/${username}`
        );

        if (!userRes.ok) {
          throw new Error("User not found");
        }

        const userData = await userRes.json();

        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );

        const repoData = await repoRes.json();

        setUser(userData);
        setRepos(repoData);

        setHistory((prev) => {
          const updated = [
            username,
            ...prev.filter((item) => item !== username),
          ];
          return updated.slice(0, 5);
        });
      } catch (err) {
        setUser(null);
        setRepos([]);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [username]);

  const handleSearch = () => {
    if (!query.trim()) return;
    setUsername(query.trim());
  };

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-5 py-10">

      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          GitHub User Finder
        </h1>

        <p className="text-gray-400 mt-3">
          Search GitHub users and explore their latest repositories.
        </p>
      </div>

      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />

      <History
        history={history}
        onClick={setUsername}
      />

      {loading && <Loader />}

      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-xl p-4 mt-6 text-center">
          {error}
        </div>
      )}

      {user && (
        <>
          <UserCard user={user} />
          <RepoList repos={repos} />
        </>
      )}

    </div>
  </div>
);
}

export default App;