import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useConfigurator } from "../contexts/Configurator";
export const Interface = () => {
  const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor, GHLenght, setGHLenght, type, setType, size, setSize, size2, setSize2} =
    useConfigurator();
  const [opened, setOpened] = useState(window.innerWidth > 1024);
  const [dac, setDac] = useState(window.innerHeight > 1024);
  const [bab, setBab] = useState(window.innerHeight > 1024);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        overflow: "visible",
      }}
      p={3}
    >
      <Stack spacing={3}>
        <Button
          onClick={() => setOpened((opened) => !opened)}
          style={{
            justifyContent: "flex-end",
            
          }}
        >
          <Typography variant="caption">{opened ? "Закрыть меню" : "Открыть меню"}</Typography>
        </Button>
        {opened && (
          <>
              <Box
                sx={{
                  position: "absolute",
                  top: 20,
                  right: 0,
                  bottom: 0,
                  overflow: "auto",
                }}
                p={3}
              >
                {/* ща дачница */}
                <Stack spacing={3}>
                  <Button
                    onClick={() => setDac((dac) => !dac)}
                    onChange={(e) => setDac(parseInt(e.target.value))}
                    style={{
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography variant="caption">{dac ? "Дачница" : "Дачница"}</Typography>
                  </Button>
                  {dac && (
                    <>
                      <Box className="glass" p={2}>
                        <FormControl>
                          <FormLabel>Размер</FormLabel>
                            <RadioGroup
                              value={size}
                              onChange={(e) => {
                                
                                setSize(parseInt(e.target.value))
                                setSize2(5);
                              }}
                            >
                              <FormControlLabel
                                value="0"
                                control={<Radio />}
                                label="2x4м"
                              />
                              <FormControlLabel
                                value="1"
                                control={<Radio />}
                                label="2х6м"
                              />
                              <FormControlLabel
                                value={2}
                                control={<Radio />}
                                label="2х8м"
                              />
                              <FormControlLabel
                                value={3}
                                control={<Radio />}
                                label="2,5х4м"
                              />
                              <FormControlLabel
                                value={4}
                                control={<Radio />}
                                label="2,5х6м"
                              />
                              <FormControlLabel
                                value={5}
                                control={<Radio />}
                                label="2,5х8м"
                              />
                              <FormControlLabel
                                value={6}
                                control={<Radio />}
                                label="2,5х10м"
                              />
                              <FormControlLabel
                                value={7}
                                control={<Radio />}
                                label="3х4м"
                              />
                              <FormControlLabel
                                value={8}
                                control={<Radio />}
                                label="3х6м"
                              />
                              <FormControlLabel
                                value={9}
                                control={<Radio />}
                                label="3х8м"
                              />
                              <FormControlLabel
                                value={10}
                                control={<Radio />}
                                label="3х10м"
                              />
                              <FormControlLabel
                                value={12}
                                control={<Radio />}
                                label="Свой размер"
                              />
                              <FormControl>
                                <FormLabel>Длина теплицы (cм)</FormLabel>
                                <Slider
                                  sx={{
                                    width: "200px",
                                  }}
                                  min={100}
                                  max={800}
                                  value={GHLenght}
                                  onChange={(e) => setGHLenght(e.target.value)}
                                  valueLabelDisplay="auto"
                                />
                              </FormControl>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    

                    <Box className="glass" p={3}>
                      <FormControl>
                        <FormLabel>Поликарбонат</FormLabel>
                        <RadioGroup
                          value={legsColor}
                          onChange={(e) => setLegsColor(e.target.value)}
                        >
                          <FormControlLabel
                            value={"#cccccc"}
                            control={<Radio />}
                            label="Стандарт"
                          />
                          <FormControlLabel
                            value={"#bdbdbd"}
                            control={<Radio />}
                            label="Усиленный"
                          />
                          <FormControlLabel
                            value={"#d8d8d8"}
                            control={<Radio />}
                            label="Лайт"
                          />
                          <FormControlLabel
                            value={"#bafbcb"}
                            control={<Radio />}
                            label="GreenHouse-nano"
                          />
                          <FormControlLabel
                            value={"#9da3b6"}
                            control={<Radio />}
                            label="Усиленный плюс"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>


                   </>
                  )}





                </Stack>

                {/* ща бабочка */}
                <Stack spacing={3}>
                  <Button
                    onClick={() => setBab((bab) => !bab)}
                    style={{
                      justifyContent: "flex-end", 
                      
                    }}
                  >
                    <Typography variant="caption">{bab ? "Бабочка" : "Бабочка"}</Typography>
                  </Button>
                  {bab && (
                    <>
                      <Box className="glass" p={2}>
                        <FormControl>
                          <FormLabel>Размер</FormLabel>
                            <RadioGroup
                              value={size2}
                              onChange={(e) => {
                                setSize2(parseInt(e.target.value))
                                setSize(11);
                              }
                              }

                            >
                              <FormControlLabel
                                value={0}
                                control={<Radio />}
                                label="1х2м"
                              />
                              <FormControlLabel
                                value={1}
                                control={<Radio />}
                                label="1х4м"
                              />
                              <FormControlLabel
                                value={2}
                                control={<Radio />}
                                label="1х6м"
                              />
                              <FormControlLabel
                                value={3}
                                control={<Radio />}
                                label="1х8м"
                              />
                              <FormControlLabel
                                value={4}
                                control={<Radio />}
                                label="1х10м"
                              />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    

                    <Box className="glass" p={3}>
                      <FormControl>
                        <FormLabel>Поликарбонат</FormLabel>
                        <RadioGroup
                          value={legsColor}
                          onChange={(e) => setLegsColor(e.target.value)}
                        >
                          <FormControlLabel
                            value={"#bdbdbd"}
                            control={<Radio />}
                            label="Усиленный"
                          />
                          <FormControlLabel
                            value={"#cccccc"}
                            control={<Radio />}
                            label="Стандарт"
                          />
                          <FormControlLabel
                            value={"#bafbcb"}
                            control={<Radio />}
                            label="GreenHouse-nano"
                          />

                        </RadioGroup>
                      </FormControl>
                    </Box>


                   </>
                  )}
                </Stack>
              </Box>




              
            {/* <Box className="glass" p={3}>
              <FormControl>
                <FormLabel>Длина теплицы (м)</FormLabel>
                <Slider
                  sx={{
                    width: "200px",
                  }}
                  min={2}
                  max={10}
                  value={size}
                  onChange={(e) => setGHLenght(e.target.value)}
                  valueLabelDisplay="auto"
                />
              </FormControl>
            </Box> */}

            {/*
            <Box className="glass" p={3}>
              <FormControl>
                <FormLabel>Teplitsa</FormLabel>
                <Slider
                  sx={{
                    width: "200px",
                  }}
                  min={50}
                  max={200}
                  value={ghLenght}
                  onChange={(e) => setGHLenght(e.target.value)}
                  valueLabelDisplay="auto"
                />
              </FormControl>
            </Box>
            */}




            {/* <Box className="glass" p={2}>
              <FormControl>
                <FormLabel>Тип теплицы</FormLabel>
                <RadioGroup
                  value={legsColor}
                  onChange={(e) => setType(parseInt(e.target.value))}
                >
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="Дачница"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Бабочка"
                  />
                </RadioGroup>
              </FormControl>
            </Box>       */}

            {/* <Box className="glass" p={3}>
              <FormControl>
                <FormLabel>Legs Layout</FormLabel>
                <RadioGroup
                  value={legs}
                  onChange={(e) => setLegs(parseInt(e.target.value))}
                >
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="Standard"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="Solid"
                  />
                  <FormControlLabel
                    value={2}
                    control={<Radio />}
                    label="Design"
                  />
                </RadioGroup>
              </FormControl>
            </Box> */}
            
            
            {/*
            <Box className="glass" p={3}>
              <FormControl>
                <FormLabel>Тип теплицы</FormLabel>
                <Slider
                  sx={{
                    width: "200px",
                  }}
                  min={0}
                  max={1}
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  valueLabelDisplay="auto"
                />
              </FormControl>
            </Box>
            */}

            
          </>
        )}
      </Stack>
    </Box>
  );
};
