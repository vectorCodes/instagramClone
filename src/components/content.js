import { Box, HStack, Text, Image, Input, Spacer } from "@chakra-ui/react";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { AiOutlineFire } from "react-icons/ai";
import { MdEmojiEvents } from "react-icons/md";

const Content = () => {
  return (
    <Box px="2">
      <Text fontWeight="bold" fontSize="sm">
        100 views
      </Text>
      <Text fontWeight="light" fontSize="sm">
        bigSur is just around corner stay tune .
      </Text>
      <Text fontWeight="light" fontSize="sm">
        Say hello to our new member pro icon .
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
  );
};
export default Content;
