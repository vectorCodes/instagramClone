import { Box, HStack, Image, Spacer, Text, Input } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { FaUserTag } from "react-icons/fa";
import { FiHeart, FiSend } from "react-icons/fi";
import { BiMessageRounded } from "react-icons/bi";
import { MdSaveAlt } from "react-icons/md";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { MdEmojiEvents } from "react-icons/md";

const Content1 = () => {
  return (
    <Box>
      <HStack spacing="3" px="1">
        <Box border="2px solid black" rounded="full" p="1">
          <Image
            borderRadius="full"
            boxSize="30px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            cursor="pointer"
          />
        </Box>
        <Box>
          <Text fontWeight="semibold">Developer</Text>
        </Box>
        <Spacer />
        <Box px="2" cursor="pointer">
          <BsThreeDots />
        </Box>
      </HStack>
      <Box position="relative" mt="3">
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
      <Box px="2" mt="1">
        <Text fontWeight="bold" fontSize="sm">
          500 views
        </Text>
        <Text fontWeight="light" fontSize="sm">
          Developer event is coming soon...
        </Text>
        <Text fontWeight="light" fontSize="sm">
          stay updated to apple event.
        </Text>
        <HStack mt="1">
          <Box border="2px solid black" rounded="full">
            <Image
              boxSize="25px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
              borderRadius="full"
              cursor="pointer"
            />
          </Box>
          <Input w="70%" variant="flushed" placeholder="Add a comment..." />
          <Spacer />
          <Box fontSize="xl" cursor="pointer">
            <BsEmojiHeartEyes />
          </Box>
          <Box fontSize="xl" cursor="pointer">
            <AiOutlineFire />
          </Box>
          <Box fontSize="xl" cursor="pointer">
            <MdEmojiEvents />
          </Box>
        </HStack>
        <Box mt="2">
          <Text textColor="gray.500">37 minutes ago</Text>
        </Box>
      </Box>
    </Box>
  );
};
export default Content1;
