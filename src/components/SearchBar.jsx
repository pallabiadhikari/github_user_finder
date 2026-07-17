function SearchBar({ query, setQuery, handleSearch }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">

      <input
        type="text"
        value={query}
        placeholder="Search GitHub username..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        className="flex-1 bg-slate-800 border border-slate-600 rounded-xl px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8 py-4 font-semibold shadow-lg transition duration-300"
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;