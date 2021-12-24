import { Box, Text, HStack, Spacer, Divider } from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { BsWifi2, BsBatteryHalf } from "react-icons/bs";
import Secondnav from "./components/secondnav";
import Circle from "./components/circle";
import Thirdnav from "./components/thirdnav";
import Images from "./components/image";
import Content from "./components/content";
import Content1 from "./components/content1";
import Footer from "./components/footer";

const App = () => {
  return (
    <Box bg="#CDA6DE">
      <Box py="8">
        <Box
          m="0 auto"
          maxW="xs"
          bg="white"
          roundedTopLeft="lg"
          roundedTopRight="lg"
          shadow="xl"
        >
          <Box px="4" py="2" cursor="pointer">
            <HStack>
              <Text fontWeight="semibold">10:30</Text>
              <Spacer />
              <Box>
                <FaTelegramPlane />
              </Box>
              <Box>
                <GiNetworkBars />
              </Box>
              <Box fontSize="2xl">
                <BsWifi2 />
              </Box>
              <Box fontSize="2xl">
                <BsBatteryHalf />
              </Box>
            </HStack>
          </Box>
          <Box fontSize="xl" px="2">
            <Secondnav />
          </Box>
          <Box mt="1">
            <Circle />
          </Box>
          <Box py="1">
            <Divider />
          </Box>
          <Box mt="1">
            <Thirdnav />
          </Box>
          <Box mt="2">
            <Images />
          </Box>
          <Box>
            <Content />
          </Box>
          <Box mt="2">
            <Divider />
          </Box>
          <Box mt="2">
            <Content1 />
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default App;
