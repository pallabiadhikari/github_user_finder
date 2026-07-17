import RepoCard from "./RepoCard";

function RepoList({ repos }) {
  return (
    <div className="mb-10">

      <h2 className="text-3xl font-bold mb-6">
        Latest Repositories
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

        {repos.map((repo) => (
          <RepoCard
            key={repo.id}
            repo={repo}
          />
        ))}

      </div>

    </div>
  );
}

export default RepoList;