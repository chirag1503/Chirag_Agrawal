import React from 'react';
import FullScreenSection from "./FullScreenSection";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import myPhoto from "../images/3.png";
import { px } from 'framer-motion';

const AboutMe = () => {
  return (
    <Flex
      id="#aboutme-section"
      backgroundColor="#512DA8"
      py={8}
      px={4}
      alignItems="center"
      flexDirection={{ base: 'column', md: 'row' }} // Stack items vertically on small screens and display them side by side on medium screens and above
    >
      {/* Left Side: Photo */}
      <Box textAlign="center" mb={{ base: 4, md: 0 }} flexBasis={{ base: 'auto', md: '40%' }}> {/* Adjust flex basis to control the width of the photo */}
        <Image src={myPhoto} alt="Your Name" borderRadius="full" boxSize={{ base: '150px', md: '200px' }} margin="0 auto" /> {/* Adjust box size and margin for the photo */}
      </Box>
      {/* Right Side: Text */}
      <Box flex="1" ml={{ base: 0, md: 8 }} textAlign={{ base: 'center', md: 'left' }}> {/* Align text center on small screens and left on medium screens and above */}
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={4} color="white">About Me</Text> {/* Adjust font size for better readability on small screens */}
        <Text mb={4} color="white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo magna sit amet velit feugiat, a feugiat justo accumsan. Ut nec posuere orci. Nunc nec leo vestibulum, consequat ex ut, venenatis neque. In hac habitasse platea dictumst. Nullam a est risus.
        </Text>
        <Text color="white">
          Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel malesuada libero.
        </Text>
      </Box>
    </Flex>
  );
};

export default AboutMe;
