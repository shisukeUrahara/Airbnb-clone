import React from "react";
import MediumCard from "../MediumCard/MediumCard";

function MainMiddleSection({ data }) {
  console.log("**@ mainMiddleSection , data is , ", data);
  return (
    <section>
      <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
      <div className="flex items-center space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
        {data?.map((item, i) => (
          <MediumCard key={i} img={item.img} title={item.title} />
        ))}
      </div>
    </section>
  );
}

export default MainMiddleSection;
