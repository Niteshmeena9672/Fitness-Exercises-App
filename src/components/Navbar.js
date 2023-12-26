// Importing necessary modules and components from React and external libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

// Importing the logo image
import Logo from '../assets/images/Logo.png';

// Functional component for the Navbar
const Navbar = () => (
  // Using MUI Stack for layout with specified styles
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
    px="20px"
  >
    {/* Link to the home page with the logo */}
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    {/* Stack for navigation links with specified styles */}
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      {/* Link to the home page with styling for active state */}
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      {/* External link for exercises */}
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
);

// Exporting the Navbar component as the default export
export default Navbar;
