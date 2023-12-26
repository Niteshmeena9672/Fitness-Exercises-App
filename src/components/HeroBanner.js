// Importing necessary modules and components from React and external libraries
import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

// Importing the hero banner image
import HeroBannerImage from '../assets/images/banner.jpg';

// Functional component for the HeroBanner section
const HeroBanner = () => (
  // Container for the hero banner with specified styles
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    {/* Title of the fitness club */}
    <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>

    {/* Main heading with emphasis on keywords */}
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Unleash Your Potential, <br />
      Every Day
    </Typography>

    {/* Subtitle with a message about personalized exercises */}
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>

    {/* Stack for the CTA (Call to Action) button */}
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>

    {/* Subtitle with reduced opacity and display based on screen size */}
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>

    {/* Image component for the hero banner */}
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

// Exporting the HeroBanner component as the default export
export default HeroBanner;
