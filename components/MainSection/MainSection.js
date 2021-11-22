import React from "react";
import MainBottomSection from "../MainBottomSection/MainBottomSection";
import MainMiddleSection from "../MainMiddleSection/MainMiddleSection";
import MainTopSection from "../MainTopSection/MainTopSection";

function MainSection({ exploreData, cardsData }) {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <MainTopSection data={exploreData} />
      <MainMiddleSection data={cardsData} />
      <MainBottomSection />
    </main>
  );
}

export default MainSection;
