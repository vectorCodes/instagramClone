import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <Box>
        <App />
      </Box>
    </ChakraProvider>
  </StrictMode>,
  rootElement
);
