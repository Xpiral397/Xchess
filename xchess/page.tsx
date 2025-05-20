import ChessPiece from "../components/chess-piece"
import ChessBoard from "../components/chess-board"

export default function Page() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <ChessBoard />
        <ChessPiece type="pawn" color="white" position={[0, 0.5, 1]} />
        <ChessPiece type="king" color="black" position={[7, 0.5, 7]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
