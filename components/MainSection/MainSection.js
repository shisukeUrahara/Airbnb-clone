import React from "react";
import MainBottomSection from "../MainBottomSection/MainBottomSection";
import MainMiddleSection from "../MainMiddleSection/MainMiddleSection";
import MainTopSection from "../MainTopSection/MainTopSection";

function MainSection({ exploreData }) {
  return (
    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <MainTopSection exploreData={exploreData} />
      <MainMiddleSection />
      <MainBottomSection />
    </main>
  );
}

export default MainSection;
