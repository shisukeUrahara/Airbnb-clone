import Head from "next/head";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Airbnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {/* HEADER */}
        <Header />

        {/* BANNER */}

        {/* FEED */}
      </div>
    </div>
  );
}
