import React from "react";
import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={999} // Ensure the navbar appears above other content
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={7}
          py={4}
          justifyContent={{ base: 'left', md: 'space-between' }}
          alignItems="center"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
        >
          {/* Social icons */}
          <HStack spacing={4}> 
            <a
              href="mailto: cdagrawal551@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.5rem' }}
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a
              href="https://github.com/chirag1503"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.5rem' }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/chirag-agrawal-180614221"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '1.5rem' }}
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </HStack>
          
          {/* Navigation links */}
          <HStack spacing={5}>
            <a
              href="#projects-section"
              style={{ cursor: 'pointer' }}
            >
              Projects
            </a>
            <a
              href="#contact-me-section"
              style={{ cursor: 'pointer' }}
            >
              Contact Me
            </a>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
