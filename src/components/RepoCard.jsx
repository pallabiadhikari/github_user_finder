function RepoCard({ repo }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500 hover:-translate-y-2 transition duration-300 shadow-lg">

      <h3 className="text-xl font-bold text-blue-400">
        {repo.name}
      </h3>

      <p className="text-gray-300 mt-3 min-h-[60px]">
        {repo.description || "No description available"}
      </p>

      <div className="flex justify-between text-gray-400 mt-5">

        <span>⭐ {repo.stargazers_count}</span>

        <span>{repo.language || "Unknown"}</span>

      </div>

      <a
        href={repo.html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-5 text-blue-400 hover:text-blue-300"
      >
        View Repository →
      </a>

    </div>
  );
}

export default RepoCard;