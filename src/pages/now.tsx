import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Stevenson</title>
        <meta name="description" content="Dan Stevenson's personal website" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#d6d6d0]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-black sm:text-[5rem]">
            Dan Stevenson
          </h1>

          <div className="justify-left">
            <h2 className="text-3xl font-extrabold text-black">What I'm doing now</h2>
          </div>
        </div>
      </main>
    </>
  );
}
