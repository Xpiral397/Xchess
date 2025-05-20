"use client"

import { Html } from "@react-three/drei"

export function GameStatus({ turn, gameOver, winner, aiThinking, playerColor }:any) {
  if (gameOver) return null

  const isPlayerTurn = turn === playerColor

  return (
    <Html position={[0, 5, playerColor === "white" ? -5 : 5]} center>
      <div className="bg-white/90 px-4 py-2 rounded-lg shadow-lg text-center min-w-[200px]">
        {aiThinking ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <p className="font-medium">AI is thinking...</p>
          </div>
        ) : (
          <>
            <p className="font-medium">{isPlayerTurn ? "Your turn" : "AI's turn"}</p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div
                className={`w-3 h-3 rounded-full ${turn === "white" ? "bg-white border border-gray-400" : "bg-black"}`}
              ></div>
              <p>{turn.charAt(0).toUpperCase() + turn.slice(1)} to move</p>
            </div>
          </>
        )}
      </div>
    </Html>
  )
}
