import Head from "next/head";
import { apollo } from "../db/apollo";
import { GET_ALL_POSTS } from "../graphql/queries";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to the blog app with strapi-graphql and nextjs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Welcome to my blog!</h1>
        <h4>Recent posts</h4>
        <div className={styles.postsWrapper}>
          {posts &&
            Array.isArray(posts.data) &&
            posts.data.map((post) => {
              return (
                <div className={styles.card} key={post.id}>
                  <h2>{post.attributes.title}</h2>
                  <p>{post.attributes.description}</p>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context) {
  const { data } = await apollo.query({
    query: GET_ALL_POSTS,
  });
  return {
    props: {
      posts: data.articles,
    },
  };
}