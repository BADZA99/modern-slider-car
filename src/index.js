import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height:100vh;
    width:100%;
    background: #000;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
    scroll-behavior:smooth;
  }
`;




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Reset />
    <App />
  </React.StrictMode>
);

