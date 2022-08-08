import { FC } from "react";
import styled from "@emotion/styled";
import { ImPhone, ImLocation } from "react-icons/im";

export const Footer: FC = () => {
  return (
    <FooterContainer>
      <span> <ImPhone/> Phone </span>
      <span> <ImLocation/> Adress</span>
      <span> Contacts </span>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: flex-end;



  span {
    margin-right: 20px;
    cursor: pointer;
  }
`;