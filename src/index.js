import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, CSSReset, theme } from '@chakra-ui/react'
import App from './App';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
