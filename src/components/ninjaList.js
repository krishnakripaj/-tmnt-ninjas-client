import React, { useState } from "react";
import Ninja from "./ninja";

const NinjaList = () => {
  const [ninjaArr, setNinjaArr] = useState([
    { id: 1, name: "Leo", likeCount: 10 },
    { id: 2, name: "Mike", likeCount: 20 },
    { id: 3, name: "Don", likeCount: 30 },
  ]);

  return (
    <div className="row">
      {ninjaArr.map((ninja) => {
        return (
          <div className="col" key={ninja.id}>
            <Ninja
              key={ninja.id}
              likeCount={ninja.likeCount}
              name = {ninja.name}
              message={"Hey From Parent"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NinjaList;
