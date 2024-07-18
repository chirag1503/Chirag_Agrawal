import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid, Button, Text, Image } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Keeper App",
    description: "A simple note-taking app built with React and Firebase.",
    getImageSrc: () => require("../images/photo1.jpg"),
    githubLink: "https://github.com/chirag1503/keeper-app",
  },
  {
    title: "Calculator App",
    description: "A calculator app built with basic fundamentals of Javascript.",
    getImageSrc: () => require("../images/photo2.jpg"),
    githubLink: "https://github.com/chirag1503/calculator-app",
  },
  {
    title: "Little Lemon Website",
    description: "A restaurant website built with React.",
    getImageSrc: () => require("../images/photo3.jpg"),
    githubLink: "https://github.com/chirag1503/captastone-project-little-lemon",
  },
  {
    title: "Resume Builder",
    description: "A resume builder app built with MERN Stack development.",
    getImageSrc: () => require("../images/photo4.jpg"),
    githubLink: "https://github.com/yourusername/resume-builder",
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section" color="white" mb={6}>
        Featured Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
        {projects.map((project) => (
          <Box
            key={project.title}
            bg="white"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            p={4}
            textAlign="center"
          >
            <Image
              src={project.getImageSrc()}
              alt={project.title}
              mb={4}
              borderRadius="md"
            />
            <Heading as="h3" size="md" color="black" mb={2}>
              {project.title}
            </Heading>
            <Text color="black" mb={4}>
              {project.description}
            </Text>
            <Button
              as="a"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="teal"
              size="sm"
            >
              View Code
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </FullScreenSection>
  );
};

export default ProjectsSection;
