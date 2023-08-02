import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Dan Stevenson</title>
        <meta name="description" content="Dan Stevenson's personal website" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-[#ffffff] to-[#d6d6d0]">
        <div className="flex flex-col items-center gap-12 py-16 ">
          <h1 className="text-5xl font-extrabold text-black sm:text-[5rem] justify-left">
            Dan Stevenson
          </h1>

          <div className="flex flex-col gap-6 justify-left">
            <div>
              <h2 className="text-3xl font-extrabold text-black">Me in 10 seconds</h2>
              <p>💻 I'm a software engineer building in TypeScript for the sports and outdoor industry</p>
              <p>🤔 I'm a thinker, traveler, reader, sports fan and outdoorsman</p>
              <p>🌍 I've lived in Sheffield, London and La Réunion 🏝 in the Indian Ocean.</p>
            </div>
            
            <div>
              <h2 className="text-3xl font-extrabold text-black">What am I doing now?</h2>
              <p>Have a look at my "now" page</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
