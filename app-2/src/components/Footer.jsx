import React from 'react';
import styled from "@emotion/styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <span>Main</span>
      <span>About</span>
      <span>Contact</span>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background: #af1f1f;
  padding: 20px;
  span{
    color: white;
    margin-right: 20px;
    cursor: pointer;
  }
`;
