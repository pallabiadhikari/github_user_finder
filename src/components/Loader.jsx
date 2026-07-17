function Loader() {
  return (
    <div className="flex flex-col items-center py-10">

      <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-400">
        Loading GitHub profile...
      </p>

    </div>
  );
}

export default Loader;