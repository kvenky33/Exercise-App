import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Home = () => {
  const [bodypart, setBodypart] = useState("all");
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        setBodypart={setBodypart}
        bodypart={bodypart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodypart={bodypart}
      />
    </Box>
  );
};

export default Home;
