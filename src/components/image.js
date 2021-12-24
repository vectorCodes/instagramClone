import { Box, HStack, Spacer } from "@chakra-ui/react";
import { FaUserTag } from "react-icons/fa";
import { FiHeart, FiSend } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { MdSaveAlt } from "react-icons/md";

const Images = () => {
  return (
    <Box>
      <Box position="relative">
        <Box
          h="26vh"
          w="full"
          bgImage="url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60')"
          bgPosition="center"
          bgRepeat="no-repeat"
        ></Box>

        <Box
          position="absolute"
          bottom="1"
          textColor="gray.200"
          left="3"
          fontSize="xl"
          cursor="pointer"
        >
          <FaUserTag />
        </Box>
      </Box>
      <Box mt="2" p="2">
        <HStack fontSize="xl" spacing="3" cursor="pointer">
          <Box>
            <FiHeart />
          </Box>
          <Box>
            <BiMessageRounded />
          </Box>
          <Box>
            <FiSend />
          </Box>
          <Spacer />
          <Box>
            <Box>
              <MdSaveAlt />
            </Box>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};
export default Images;
