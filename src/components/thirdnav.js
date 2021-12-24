import { Box, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
const Thirdnav = () => {
  return (
    <Box>
      <HStack spacing="3" px="1" cursor="pointer">
        <Box border="2px solid black" rounded="full" p="1">
          <Image
            borderRadius="full"
            boxSize="30px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Box>
        <Box>
          <Text fontWeight="semibold">vectorpro</Text>
        </Box>
        <Spacer />
        <Box px="2">
          <BsThreeDots />
        </Box>
      </HStack>
    </Box>
  );
};
export default Thirdnav;
