'use client'
import { useGLTF } from '@react-three/drei'
import { useEffect } from 'react'

export default function usePreloadModelsCall() {
  useEffect(() => {
    // Preload all chess piece models from public/models_glb
    useGLTF.preload('/models_glb/Board_Wood_0.glb')
    useGLTF.preload('/models_glb/Board_Gold_0.glb')
    useGLTF.preload('/models_glb/Board_Checker_0.glb')

    // Kings
    useGLTF.preload('/models_glb/King_Material.001_0.glb')
    useGLTF.preload('/models_glb/King.001_Material_0.glb')

    // Queens
    useGLTF.preload('/models_glb/Queen_Material.001_0.glb')
    useGLTF.preload('/models_glb/Queen.001_Material_0.glb')

    // Bishops
    useGLTF.preload('/models_glb/Bishop_Material.001_0.glb')
    useGLTF.preload('/models_glb/Bishop.001_Material.001_0.glb')
    useGLTF.preload('/models_glb/Bishop.002_Material_0.glb')
    useGLTF.preload('/models_glb/Bishop.003_Material_0.glb')

    // Knights
    useGLTF.preload('/models_glb/Knight_Material.001_0.glb')
    useGLTF.preload('/models_glb/Knight.001_Material.001_0.glb')
    useGLTF.preload('/models_glb/Knight.002_Material_0.glb')
    useGLTF.preload('/models_glb/Knight.003_Material_0.glb')

    // Rooks
    useGLTF.preload('/models_glb/Rook_Material.001_0.glb')
    useGLTF.preload('/models_glb/Rook.001_Material.001_0.glb')
    useGLTF.preload('/models_glb/Rook.002_Material_0.glb')
    useGLTF.preload('/models_glb/Rook.003_Material_0.glb')

    // Pawns
    useGLTF.preload('/models_glb/Pawn_Material.001_0.glb')
    useGLTF.preload('/models_glb/Pawn.001_Material_0.glb')
  }, [])
}
