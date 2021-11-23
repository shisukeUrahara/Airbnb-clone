import Head from "next/head";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import MainSection from "../components/MainSection/MainSection";
import Footer from "../components/Footer/Footer";

export default function Home({ exploreData, cardsData }) {
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
        <MainSection exploreData={exploreData} cardsData={cardsData} />

        {/* footer */}
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
