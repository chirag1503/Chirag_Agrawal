// ContactMeSection.jsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  VStack,
  Heading,
  useBreakpointValue
} from '@chakra-ui/react';

const ContactMeSection = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().required('Required')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      // Here you can handle the form submission, e.g., send the data to your server
    }
  });

  const formWidth = useBreakpointValue({ base: '100%', md: '50%' });

  return (
    <Box
      id="contact-me-section"
      backgroundColor="#512DA8"
      py={16}
      px={8}
      display="flex"
      color={'white'}
      justifyContent="center"
      alignItems="center"
    >
      <Box width={formWidth}>
        <Heading as="h2" mb={6} textAlign="center">
          Contact Me
        </Heading>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4}>
            <FormControl isInvalid={formik.touched.name && formik.errors.name}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                {...formik.getFieldProps('name')}
              />
              <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.email && formik.errors.email}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                {...formik.getFieldProps('email')}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.touched.message && formik.errors.message}>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                name="message"
                height={150}
                {...formik.getFieldProps('message')}
              />
              <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal" width="full">
              Submit
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default ContactMeSection;
