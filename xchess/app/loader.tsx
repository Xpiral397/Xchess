export function Loader() {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-green-800">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-xl font-bold">Loading Chess Game...</p>
        </div>
      </div>
    )
  }
  