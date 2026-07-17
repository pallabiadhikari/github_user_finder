function History({ history, onClick }) {
  if (history.length === 0) return null;

  return (
    <div className="mb-8">

      <p className="text-gray-400 mb-3">
        Recent Searches
      </p>

      <div className="flex flex-wrap gap-3">

        {history.map((user) => (
          <button
            key={user}
            onClick={() => onClick(user)}
            className="bg-slate-700 hover:bg-blue-600 px-4 py-2 rounded-full transition"
          >
            {user}
          </button>
        ))}

      </div>

    </div>
  );
}

export default History;