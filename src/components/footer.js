import { Box, Image, HStack } from "@chakra-ui/react";
import { AiOutlineHome } from "react-icons/ai";
import { FiSearch, FiPlusSquare, FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <Box shadow="lg" bottom="0" position="fixed" bg="white" h="7vh">
      <HStack fontSize="2xl" spacing="12" cursor="pointer" w="full">
        <Box>
          <AiOutlineHome />
        </Box>
        <Box>
          <FiSearch />
        </Box>
        <Box>
          <FiPlusSquare />
        </Box>
        <Box>
          <FiHeart />
        </Box>
        <Image
          borderRadius="full"
          boxSize="32px"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />
      </HStack>
    </Box>
  );
};
export default Footer;
