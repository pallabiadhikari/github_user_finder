function UserCard({ user }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 shadow-2xl mb-10">

      <div className="flex flex-col md:flex-row gap-8">

        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-36 h-36 rounded-full border-4 border-blue-500 shadow-lg"
        />

        <div className="flex-1">

          <h2 className="text-3xl font-bold">
            {user.name || user.login}
          </h2>

          <p className="text-blue-400">@{user.login}</p>

          <p className="text-gray-300 mt-4">
            {user.bio || "No bio available"}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

            <div className="bg-slate-700 rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold">
                {user.followers}
              </h3>
              <p className="text-gray-400">Followers</p>
            </div>

            <div className="bg-slate-700 rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold">
                {user.following}
              </h3>
              <p className="text-gray-400">Following</p>
            </div>

            <div className="bg-slate-700 rounded-xl p-4 text-center">
              <h3 className="text-2xl font-bold">
                {user.public_repos}
              </h3>
              <p className="text-gray-400">Repositories</p>
            </div>

            <div className="bg-slate-700 rounded-xl p-4 text-center">
              <h3 className="text-lg font-bold">
                {user.location || "N/A"}
              </h3>
              <p className="text-gray-400">Location</p>
            </div>

          </div>

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold transition"
          >
            View GitHub Profile →
          </a>

        </div>

      </div>

    </div>
  );
}

export default UserCard;