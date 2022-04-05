import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from '@chakra-ui/react';
import { FaTrash, FaPen } from 'react-icons/fa';
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
        <Flex gap={4} justifyContent={'center'} mt={5}>
          <Button colorScheme={'blue'}>
            <Icon as={FaPen} mr={1} />
            <Text>Edit</Text>
          </Button>
          <Button colorScheme={'red'}>
            <Icon as={FaTrash} mr={1} />
            <Text as={'span'}> Delete</Text>
          </Button>
        </Flex>
      </Container>
    </>
  );
};

export default Profile;
