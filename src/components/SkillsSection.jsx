import React from "react";
import { Box, Heading, SimpleGrid, Image, Text, VStack } from "@chakra-ui/react";

const skills = [
  { name: "HTML5", logo: require("../images/html5-logo.png") },
  { name: "CSS3", logo: require("../images/css3-logo.png") },
  { name: "JavaScript", logo: require("../images/javascript-logo.png") },
  { name: "React", logo: require("../images/react-logo.png") },
  { name: "Node.js", logo: require("../images/nodejs-logo.png") },
  { name: "MongoDB", logo: require("../images/mongodb-logo.png") },
  { name: "GitHub", logo: require("../images/github-logo.png") },
  { name: "Photoshop", logo: require("../images/photoshop-logo.png") },
  { name: "Canva", logo: require("../images/canva-logo.png") },
  { name: "Bootstrap", logo: require("../images/bootstrap-logo.png") },
];

const SkillsSection = () => {
  return (
    <Box
      id="skills-section"
      minHeight="50vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      backgroundColor={"white"}
     // color={'white'}
      py={16}
      px={8}
    >
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={8}>
          SKILLS
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 3, lg: 5 }} spacing={10}>
          {skills.map((skill) => (
            <VStack key={skill.name} spacing={4}>
              <Image src={skill.logo} alt={skill.name} boxSize="80px" />
              <Text fontSize="lg" fontWeight="bold">
                {skill.name}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default SkillsSection;
