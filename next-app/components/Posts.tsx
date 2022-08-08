import { FC} from "react";
import styled from "@emotion/styled";
import { MainLayout } from "./MainLayout";


interface IPost {
  id: number;
  title: string;
  body: string;
}
interface PropsPosts {
  posts: IPost[];
}

export const Posts: FC<PropsPosts> = ({ posts }) => {
  return (
    <MainLayout>
 
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          est eum consequatur delectus amet, ex porro officia, facilis totam
          sequi cumque nisi nam reprehenderit consequuntur asperiores tenetur
          facere odio accusamus.
        </p>

        {posts
          ? posts.map((post) => (
              <li>
                {" "}
                {post.title} <br /> {post.body}{" "}
              </li>
            ))
          : "error"}


    </MainLayout>
  );
};


