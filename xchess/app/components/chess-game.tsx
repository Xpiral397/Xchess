'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import  ChessPiece from './chess-piece'


// Helper to convert board coordinates to 3D positions
const squareToPos = (file: number, rank: number) => [file - 3.5, 0, rank - 3.5]

// List of all pieces in their starting positions
const startingPieces = [
  // White pawns
  ...Array(8).fill(0).map((_, i) => ({
    type: 'pawn', color: 'white', position: squareToPos(i, 1),
  })),
  // Black pawns
  ...Array(8).fill(0).map((_, i) => ({
    type: 'pawn', color: 'black', position: squareToPos(i, 6),
  })),
  // White major pieces
  { type: 'rook', color: 'white', position: squareToPos(0, 0) },
  { type: 'knight', color: 'white', position: squareToPos(1, 0) },
  { type: 'bishop', color: 'white', position: squareToPos(2, 0) },
  { type: 'queen', color: 'white', position: squareToPos(3, 0) },
  { type: 'king', color: 'white', position: squareToPos(4, 0) },
  { type: 'bishop', color: 'white', position: squareToPos(5, 0) },
  { type: 'knight', color: 'white', position: squareToPos(6, 0) },
  { type: 'rook', color: 'white', position: squareToPos(7, 0) },
  // Black major pieces
  { type: 'rook', color: 'black', position: squareToPos(0, 7) },
  { type: 'knight', color: 'black', position: squareToPos(1, 7) },
  { type: 'bishop', color: 'black', position: squareToPos(2, 7) },
  { type: 'queen', color: 'black', position: squareToPos(3, 7) },
  { type: 'king', color: 'black', position: squareToPos(4, 7) },
  { type: 'bishop', color: 'black', position: squareToPos(5, 7) },
  { type: 'knight', color: 'black', position: squareToPos(6, 7) },
  { type: 'rook', color: 'black', position: squareToPos(7, 7) },
]

// Load the board model (change the path to your preferred board)
const BOARD_MODEL_PATH = '/models_glb/Board_Wood_0.glb'

const ChessBoard = () => {
  const { scene } = useGLTF(BOARD_MODEL_PATH) as any
  return <primitive object={scene} scale={0.12} position={[0, -0.05, 0]} />
}

const ChessGame = () => (
  <Canvas camera={{ position: [0, 7, 10], fov: 40 }}>
    <ambientLight intensity={0.5} />
    <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
    <ChessBoard />
    {startingPieces.map((p, idx) => (
      <ChessPiece key={idx} {...p} />
    ))}
    <OrbitControls />
  </Canvas>
)

export default ChessGame
