import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";


export const Main = () => {
  const [items, setItems] = useState([]);
  const getinfo = async () => {
    const resp = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=15"
    );
    const response = await resp.json();
    setItems(response);
  };
  useEffect(() => {
    getinfo();
  });
  return (
    <MainContainer>
      {items.map(item => <Post key ={item.id}> {item.id}. {item.title} <br/> {item.body} </Post>)}
    </MainContainer>
  );
};
const MainContainer = styled.div`
  background: #00000013;
  padding: 30px;
`;
const Post = styled.div`
  margin-bottom: 10px;

`;
