import { Box, HStack, Text } from "@chakra-ui/react";
import { BsCamera } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const Secondnav = () => {
  return (
    <Box>
      <HStack justifyContent="space-between" cursor="pointer">
        <Box>
          <BsCamera />
        </Box>
        <Box>
          <Text>𝕴𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒</Text>
        </Box>
        <Box>
          <FiSend />
        </Box>
      </HStack>
    </Box>
  );
};
export default Secondnav;
