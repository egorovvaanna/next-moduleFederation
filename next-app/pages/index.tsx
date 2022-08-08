import type { NextPage } from "next";
import Head from "next/head";
import { Posts } from "../components/Posts";

import styles from "../styles/Home.module.css";
import { GetStaticProps } from "next";


interface IPost {
  id: number;
  title: string;
  body: string;
}
interface PropsPosts {
  posts: IPost[];
}



const Home: NextPage<PropsPosts> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head> <title> App 1 </title></Head>

      <Posts posts={posts} />
    </div>
  );
};



export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=30"
  );
  const posts: IPost[] = await res.json();

  return {
    props: { posts },
  };
};

export default Home;
