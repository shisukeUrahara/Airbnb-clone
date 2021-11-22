import React from "react";
import SmallCard from "../SmallCard/SmallCard";

function MainTopSection({ exploreData }) {
  return (
    <section>
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map((data, i) => (
          <SmallCard
            key={i}
            img={data.img}
            location={data.location}
            distance={data.distance}
          />
        ))}
      </div>
    </section>
  );
}

export default MainTopSection;
