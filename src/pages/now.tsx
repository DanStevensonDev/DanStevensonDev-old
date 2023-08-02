import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Stevenson</title>
        <meta name="description" content="Dan Stevenson's personal website" />
      </Head>
      <div className="justify-left">
        <h2 className="text-3xl font-extrabold text-black">
          What I'm doing now
        </h2>
      </div>
    </>
  );
}
