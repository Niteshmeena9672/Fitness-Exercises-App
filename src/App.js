import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Functional component for the main application
const App = () => (
  // Using Box component from Material-UI to style the layout
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
    {/* Navbar component at the top of the application */}
    <Navbar />
    {/* React Router's Routes component for defining routes */}
    <Routes>
      {/* Route for the home page, rendering the Home component */}
      <Route path="/" element={<Home />} />
      {/* Route for individual exercise detail page, rendering ExerciseDetail component */}
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
    </Routes>
    {/* Footer component at the bottom of the application */}
    {/* <Footer /> */}
  </Box>
);

// Exporting the App component as the default export
export default App;
