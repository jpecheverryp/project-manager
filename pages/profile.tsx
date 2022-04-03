import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import { User } from '../data';
const Profile = () => {
  return (
    <>
      <Container
        borderRadius={12}
        padding={5}
        textAlign={'center'}
        maxWidth={'20rem'}
        bgColor={'#222'}
        color={'white'}
      >
        <Image
          borderRadius={15}
          display={'block'}
          margin={'1rem auto 0'}
          src={User.profilePicture}
        />
        <Heading mt={4} as={'h2'} size={'lg'}>
          {User.username}
        </Heading>

        <Text mt={5} size={'md'}>
          Username: <Text as={'span'}>{User.username}</Text>
        </Text>
        <Text mt={5} size={'md'}>
          E-Mail: <Text as={'span'}>{User.email}</Text>
        </Text>
      </Container>
    </>
  );
};

export default Profile;
