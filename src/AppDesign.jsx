import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    min-height: 100%;
    width: 100%;
    overflow-x: hidden;
    background-color: rgb(31, 32, 36);;
    font-family: Arial, sans-serif;
  }
  ul{
  padding: 0;
  margin: 0;
  }
  
  html{
   margin: 0;
   padding: 0;
   min-height: 100%;
    width: 100%;
    background-color: rgb(31, 32, 36);;
    font-family: Arial, sans-serif;
  }

  .app-container {
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
