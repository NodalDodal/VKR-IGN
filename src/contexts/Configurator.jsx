import { createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({ children }) => {
  const [legs, setLegs] = useState(0);
  const [legsColor, setLegsColor] = useState("#bdbdbd");
  const [tableWidth, setTableWidth] = useState(100);
  const [ghLenght, setGHLenght] = useState(100);
  const [type, setType] = useState(0);
  const [size, setSize] = useState(0);
  const [size2, setSize2] = useState(5);
  return (
    <ConfiguratorContext.Provider
      value={{
        legs,
        setLegs,
        legsColor,
        setLegsColor,
        tableWidth,
        setTableWidth,
        ghLenght,
        setGHLenght,
        type,
        setType,
        size,
        setSize,
        size2,
        setSize2,
      }}
    >
      
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
