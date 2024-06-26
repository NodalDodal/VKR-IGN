import { OrbitControls, Stage } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import { Table } from "./Table";
import { Monkey } from "./Monkey";
import { Green } from "./Green";
import { Green2 } from "../../Green2";
import { Nos } from "./Nos";
import { BigG } from "./BigG";
import { Tep } from "./Tep";


export const Experience = () => {
  const { legs } = useConfigurator(); // Force rerender the stage & shadows
  const {type} = useConfigurator();
  const {size} = useConfigurator();
  const {size2} = useConfigurator();
  const {ghLenght} = useConfigurator();

  return (
    <>
      <Stage
        intensity={1.5}
        environment="city"
        shadows={{
          type: "accumulative",
          color: "#d9afd9",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >
        {/*<Table/>*/}
        
        {/* <Monkey/> */}
        {/* <Nos/> */}
        <BigG/>
        <Tep/>

      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};
