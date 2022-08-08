import { FC, ReactNode } from "react";

import styled from "@emotion/styled";
import { Footer } from "./Footer";

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainLayoutContainer>
      <HeaderContainer>
        <span> Main</span>
        <span> About</span>
        <span> Contacts </span>
      </HeaderContainer>

      <main>{children}</main>

      <Footer />
    </MainLayoutContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  span {
    margin-right: 20px;
    cursor: pointer;
  }
`;
const MainLayoutContainer = styled.div``;
