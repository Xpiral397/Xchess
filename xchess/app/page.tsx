"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { Loader } from "./loader"

// Dynamically import the ChessGame component to avoid SSR issues with Three.js
const ChessGame = dynamic(() => import("./components/chess-game"), {
  ssr: false,
  loading: () => <Loader />,
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-green-800">
      <div className="w-full h-screen">
        <Suspense fallback={<Loader />}>
          <ChessGame />
        </Suspense>
      </div>
    </main>
  )
}
