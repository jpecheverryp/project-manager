import { Box, Container, Flex, Heading, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
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
            <NextLink href={'/projects'} passHref>
              <Link>Projects</Link>
            </NextLink>
            <NextLink href={'/profile'} passHref>
              <Link>Profile</Link>
            </NextLink>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
