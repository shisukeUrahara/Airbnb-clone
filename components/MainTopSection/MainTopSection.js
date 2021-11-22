import React from "react";
import SmallCard from "../SmallCard/SmallCard";

function MainTopSection({ data }) {
  return (
    <section>
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((item, i) => (
          <SmallCard
            key={i}
            img={item.img}
            location={item.location}
            distance={item.distance}
          />
        ))}
      </div>
    </section>
  );
}

export default MainTopSection;
