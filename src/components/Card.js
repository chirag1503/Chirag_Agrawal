import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  console.log("Description:", description);
  return (
    <VStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p={4}
      bg="white"
      width="100%"
      maxW="md"
    >
      <Image src={imageSrc} alt={title} boxSize="200px" objectFit="cover" />
      <VStack spacing={2} alignItems="flex-start">
        <Heading as="h2" size="md" color="black">{title}</Heading>
        <Text color="black">{description}</Text>
      </VStack>
      <HStack justify="flex-end" width="100%">
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>
  );

};

export default Card;
