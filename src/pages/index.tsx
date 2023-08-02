import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

interface PostsData {
  id: string;
  title: string;
  date: string;
}

interface Props {
  allPostsData: PostsData;
}

export default function Home({ allPostsData }: Props) {
  return (
    <Layout home>
      <Head>
        <title>Dan Stevenson</title>
      </Head>
      <section>
        <div>
          <div>
            <h2 className="text-3xl font-extrabold text-black">
              Me in 10 seconds
            </h2>
            <p>
              💻 I'm a software engineer building in TypeScript for the sports
              and outdoor industry
            </p>
            <p>
              🤔 I'm a thinker, traveler, reader, sports fan and outdoorsman
            </p>
            <p>
              🌍 I've lived in Sheffield, London and La Réunion 🏝 in the Indian
              Ocean.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-black">
              What am I doing now?
            </h2>
            <p>Have a look at my "now" page</p>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-3xl font-extrabold text-black">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
