import { FC } from "react";
import styled from "@emotion/styled";

interface IPost {
  id: number;
  title: string;
  body: string;
}
interface PropsPosts {
  posts: IPost[];
}

export const Content: FC<PropsPosts> = ({ posts }) => {
  console.log(posts);
  return (
    <ContentContainer>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
        est eum consequatur delectus amet, ex porro officia, facilis totam sequi
        cumque nisi nam reprehenderit consequuntur asperiores tenetur facere
        odio accusamus.
      </p>

      {posts ? posts.map((post) => <li> {post.title} </li>) : "error"}
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  background-color: #0000005b;
  color: white;
  padding: 20px;
`;
