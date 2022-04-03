import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <Box as={'nav'} padding={'1rem'}>
      <Container maxWidth={'container.xl'}>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Heading as={'h1'} size={'lg'}>
            <Logo />
          </Heading>
          <Flex gap={'1rem'}>
            <Box>Projects</Box>
            <Box>Profile</Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
