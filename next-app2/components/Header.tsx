import { FC } from "react";
import styled from "@emotion/styled";

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <span> Main</span>
      <span> About</span>
      <span> Contacts </span>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: #d61111;
  color: white;
  padding: 20px;
  span {
    margin-right: 20px;
    cursor: pointer;
  }
`;
