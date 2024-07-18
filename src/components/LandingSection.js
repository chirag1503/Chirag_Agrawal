import React, { useState, useEffect } from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import HeroImage from '../images/hero-section.png';
import { ReactTyped as Typed } from 'react-typed';

const roles = ['Web Developer', 'React Enthusiast', 'UI/UX Designer', 'Graphic Designer'];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      id="hero-section"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor="#305c79"
      color="#fff"
      py={16}
      px={8}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        justifyContent="space-between"
        maxWidth="1200px"
        width="100%"
        mx="auto"
      >
        <Box textAlign={{ base: 'center', md: 'left' }} mb={{ base: 8, md: 0 }}>
          <Heading as="h1" size="2xl" mb={4}>
            I am <br /> Chirag Agrawal,
          </Heading>
          <Text fontSize="2xl" color="white">
            <Typed
              strings={roles}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </Text>
        </Box>
        <Box display="flex" justifyContent="center">
          <Image
            src={HeroImage}
            alt="Your Name"
            borderRadius="full"
            boxSize={{ base: '300px', md: '400px' }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
