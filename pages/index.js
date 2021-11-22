import Head from "next/head";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import MainSection from "../components/MainSection/MainSection";

export default function Home({ exploreData }) {
  console.log("**@ index , exploreData is , ", exploreData);

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
        <Banner />

        {/* Main section */}
        <MainSection exploreData={exploreData} />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  console.log("**@ index , exploreData is , ", exploreData);

  return {
    props: {
      exploreData,
    },
  };
}
