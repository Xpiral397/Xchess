"use client"

import { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export function ChessBoard({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF("/models/Board_Wood_0.glb")
  const boardRef = useRef()

  return <primitive object={scene} position={position} rotation={rotation} ref={boardRef} dispose={null} />
}
