/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/green2.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Green2(props) {
  const { nodes, materials } = useGLTF('./models/green2.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.big_gh_midBAKE.geometry} material={materials['2.001']} />
      position={[0, 0, 0]}
    </group>
  )
}

useGLTF.preload('./models/green2.gltf')
