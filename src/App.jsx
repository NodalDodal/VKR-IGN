import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { TextureLoader } from "three";
import { Environment } from "@react-three/drei";

function App() {
  return (
    <>
      
      <Canvas shadows camera={{ position: [4, 4, -12], fov: 35 }}>    

      <Experience />

      </Canvas>

      <Interface />

    </>
  );
}

export default App;
