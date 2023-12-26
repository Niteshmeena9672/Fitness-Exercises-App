// Importing necessary modules and components from React and external libraries
import React, { useState } from 'react';
import { Box } from '@mui/material';

// Importing components used in the Home component
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

// Functional component for the Home page
const Home = () => {
  // State variables for managing exercises and selected body part
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  // Render the Home component with a Box container
  return (
    <Box>
      {/* Hero banner section */}
      <HeroBanner />

      {/* SearchExercises component for filtering and searching exercises */}
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />

      {/* Exercises component for displaying filtered exercises */}
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

// Exporting the Home component as the default export
export default Home;
