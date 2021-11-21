import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>HELLO AIRBNB</h1>
      </main>
    </div>
  );
}
