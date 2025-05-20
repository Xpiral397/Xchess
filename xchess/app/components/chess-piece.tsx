"use client"
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

interface PieceProps {
  type: keyof typeof pieceModels
  color: 'white' | 'black'
  position: [x: number, y: number, z: number]
}

// Map all piece models for both colors
const pieceModels = {
  pawn: {
    white: '/models_glb/Pawn_Material.001_0.glb',
    black: '/models_glb/Pawn.001_Material_0.glb',
  },
  rook: {
    white: '/models_glb/Rook_Material.001_0.glb',
    black: '/models_glb/Rook.001_Material.001_0.glb',
  },
  knight: {
    white: '/models_glb/Knight_Material.001_0.glb',
    black: '/models_glb/Knight.001_Material.001_0.glb',
  },
  bishop: {
    white: '/models_glb/Bishop_Material.001_0.glb',
    black: '/models_glb/Bishop.001_Material.001_0.glb',
  },
  queen: {
    white: '/models_glb/Queen_Material.001_0.glb',
    black: '/models_glb/Queen.001_Material_0.glb',
  },
  king: {
    white: '/models_glb/King_Material.001_0.glb',
    black: '/models_glb/King.001_Material_0.glb',
  },
} as const

type GLTFResult = {
  scene: THREE.Group
  materials: Record<string, THREE.Material>
  nodes: Record<string, THREE.Mesh>
}

const ChessPiece: React.FC<PieceProps> = ({ type, color, position }) => {
  const gltf = useGLTF(pieceModels[type][color]) as GLTFResult
  const ref = useRef<THREE.Group>(null)

  // Example animation: slow rotation (remove if not needed)
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.002
  })

  return (
    <group ref={ref} position={position}>
      <primitive object={gltf.scene.clone()} dispose={null} />
    </group>
  )
}

export default ChessPiece
