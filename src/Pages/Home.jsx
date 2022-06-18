import React, { useState } from "react";
import { Box } from "@mui/material";

import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
