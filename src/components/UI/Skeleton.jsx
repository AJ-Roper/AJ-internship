import React from "react";

const Skeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div className="skeleton-box" key={i}>
        <Skeleton width={440} height={440} />
      </div>
    ));
};

export default Skeleton;
