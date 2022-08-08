import React from 'react';
import styled from "@emotion/styled";

export const Header = () => {
  return (
    <HeaderContainer>
      <span>Main</span>
      <span>About</span>
      <span>Contact</span>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background: black;
  padding: 20px;
  span{
    color: white;
    margin-right: 20px;
    cursor: pointer;
  }
`;
