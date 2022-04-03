import { Text } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <a>
        <span>
          <Text>Project_Manager</Text>
        </span>
      </a>
    </Link>
  );
};

export default Logo;
