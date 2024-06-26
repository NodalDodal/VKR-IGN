/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/nos.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/nos.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['3х6'].geometry} material={materials['Material.001']}>
        <mesh geometry={nodes['3х10003'].geometry} material={materials['Material.003']} position={[1.76, 1.848, 0]} />
      </mesh>
      <mesh geometry={nodes['3х8'].geometry} material={materials['Material.001']}>
        <mesh geometry={nodes['3х10002'].geometry} material={materials['Material.003']} position={[2.747, 1.864, 0]} />
      </mesh>
      <mesh geometry={nodes['3х10'].geometry} material={materials['Material.001']}>
        <mesh geometry={nodes['3х10001'].geometry} material={materials['Material.003']} position={[3.733, 1.873, 0]} />
      </mesh>
      <group position={[0, 0.105, 0]}>
        <mesh geometry={nodes.Cube038.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube038_1.geometry} material={materials.Material} />
        <mesh geometry={nodes['25х8007'].geometry} material={materials.wood} position={[0.769, 0.083, 0]} />
        <mesh geometry={nodes.babka_met001.geometry} material={materials['Material.003']} position={[0.769, 1.095, 0]} scale={0.402} />
      </group>
      <group position={[0, 0.105, 0]}>
        <mesh geometry={nodes.Cube044.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube044_1.geometry} material={materials.Material} />
        <mesh geometry={nodes['25х8008'].geometry} material={materials.wood} position={[-0.221, 0.083, 0]} />
        <mesh geometry={nodes.babka_met002.geometry} material={materials['Material.003']} position={[-0.221, 1.095, 0]} scale={0.402} />
      </group>
      <group position={[0, 0.105, 0]}>
        <mesh geometry={nodes.Cube045.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube045_1.geometry} material={materials.Material} />
        <mesh geometry={nodes['25х8009'].geometry} material={materials.wood} position={[1.762, 0.083, 0]} />
        <mesh geometry={nodes.babka_met003.geometry} material={materials['Material.003']} position={[1.759, 1.095, 0]} scale={0.402} />
      </group>
      <group position={[0, 0.105, 0]}>
        <mesh geometry={nodes.Cube046.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube046_1.geometry} material={materials.Material} />
        <mesh geometry={nodes['25х8010'].geometry} material={materials.wood} position={[2.749, 0.083, 0]} />
        <mesh geometry={nodes.babka_met004.geometry} material={materials['Material.003']} position={[2.749, 1.095, 0]} scale={0.402} />
      </group>
      <group position={[0, 0.105, 0]}>
        <mesh geometry={nodes.Cube047.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Cube047_1.geometry} material={materials.Material} />
        <mesh geometry={nodes['25х8006'].geometry} material={materials.wood} position={[3.546, 0.734, 0]} />
        <mesh geometry={nodes.babka_met.geometry} material={materials['Material.003']} position={[3.546, 0.734, 0]} scale={0.402} />
      </group>
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[-6.592, 0, 0]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube002_1.geometry} material={materials.Material} />
      <mesh geometry={nodes['2х8003'].geometry} material={materials['Material.003']} position={[0.77, 2.008, 0]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube003_1.geometry} material={materials.Material} />
      <mesh geometry={nodes['2х8002'].geometry} material={materials['Material.003']} position={[1.758, 2.042, 0]} />
      <mesh geometry={nodes.Cube004.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube004_1.geometry} material={materials.Material} />
      <mesh geometry={nodes['2х8001'].geometry} material={materials['Material.003']} position={[2.743, 2.063, 0]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube001_1.geometry} material={materials.Material} />
      <mesh geometry={nodes['3х10004'].geometry} material={materials['Material.003']} position={[0.821, 1.801, 0]} />
      <mesh geometry={nodes.Cube005.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube005_1.geometry} material={materials.Material} />
      <mesh geometry={nodes['25х10004'].geometry} material={materials['Material.003']} position={[0.763, 1.93, 0]} />
      <mesh geometry={nodes.Cube006.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube006_1.geometry} material={materials.Material} />
      <mesh geometry={nodes['25х10003'].geometry} material={materials['Material.003']} position={[1.753, 1.959, 0]} />
      <mesh geometry={nodes.Cube007.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube007_1.geometry} material={materials.Material} />
      <mesh geometry={nodes['25х10002'].geometry} material={materials['Material.003']} position={[2.743, 1.977, 0]} />
      <mesh geometry={nodes.Cube008.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Cube008_1.geometry} material={materials.Material} />
      <mesh geometry={nodes['25х10001'].geometry} material={materials['Material.003']} position={[3.733, 1.988, 0]} />
    </group>
  )
}

useGLTF.preload('/nos.gltf')
