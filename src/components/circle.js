import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";

const Circle = () => {
  return (
    <Box>
      <HStack spacing="3" px="1" cursor="pointer">
        <Stack>
          <Box border="2px solid red" rounded="full">
            <Image
              borderRadius="full"
              boxSize="50px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
          <Text fontSize="sm" px="1">
            Vector
          </Text>
        </Stack>
        <Stack>
          <Box border="2px solid red" rounded="full">
            <Image
              borderRadius="full"
              boxSize="50px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
          <Text px="3" fontSize="sm">
            Xen
          </Text>
        </Stack>
        <Stack>
          <Box border="2px solid red" rounded="full">
            <Image
              borderRadius="full"
              boxSize="50px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
          <Text px="5" fontSize="sm">
            Aj
          </Text>
        </Stack>
        <Stack>
          <Box border="2px solid red" rounded="full">
            <Image
              borderRadius="full"
              boxSize="50px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
          <Text px="2" fontSize="sm">
            Cyber
          </Text>
        </Stack>
        <Stack>
          <Box border="2px solid red" rounded="full">
            <Image
              borderRadius="full"
              boxSize="50px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
          <Text px="2" fontSize="sm">
            Thonk
          </Text>
        </Stack>
      </HStack>
    </Box>
  );
};
export default Circle;
