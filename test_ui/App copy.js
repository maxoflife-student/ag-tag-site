import { styles } from "ansi-colors";
import React, {useEffect, useState} from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Button } from "./Components/Button.styles";

function App() {
    return (
        <Styles.Wrapper>
            <CSSReset/>
            <Navbar.Wrapper>
                <Navbar.Logo>Ag-Tags</Navbar.Logo>
                <Navbar.Items>
                    <Navbar.Item>About</Navbar.Item>
                    <Navbar.Item>Buy</Navbar.Item>
                    <Navbar.Item>Contact</Navbar.Item>
                </Navbar.Items>
            </Navbar.Wrapper>          
        </Styles.Wrapper>
    );
}

const Styles = {
    Wrapper: styled.main`
        display: flex;
        background-color: #eeeeee;
        height: 100vh;
    `,
};

const CSSReset = createGlobalStyle `
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        font-size: 1.4rem;
        font-family: 'Lucida Sans';
    }
`;

const Navbar = {
    Wrapper: styled.nav`
      flex: 1;
  
      align-self: flex-start;
  
      padding: 1rem 3rem;
  
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      background-color: white;
    `,
    Logo: styled.h1`
      border: 1px solid gray;
      padding: 0.5rem 1rem;
    `,

    Items: styled.ul`
      display: flex;
      list-style: none;
    `,

    Item: styled.li`
      padding: 0 1rem;
      cursor: pointer;
    `,
  };
export default App;
