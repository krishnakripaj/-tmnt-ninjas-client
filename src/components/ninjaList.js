import React, { useEffect, useState } from "react";
import axios from "axios";
import Ninja from "./ninja";

const NinjaList = () => {
  const [ninjaArr, setNinjaArr] = useState([]);

  const getAllNinjas = async () => {
    const { data } = await axios.get("http://localhost:5000/api/ninjas");
    let ninjas = data.map((ninja) => {
      return {
        id: ninja._id,
        imgUrl: ninja.imgUrl,
        name: ninja.name,
        nickname: ninja.nickname,
        likeCount: ninja.likeCount,
        abilities: ninja.abilities,
        dob: ninja.dob,
        isMutant: ninja.isMutant,
      };
    });
    setNinjaArr(ninjas);
  };

  const deleteNinja = async (ninjaId) => {
    await axios.delete(`http://localhost:5000/api/ninjas/${ninjaId}`);
    let filteredArr = ninjaArr.filter((ninja) => {
      return ninja.id !== ninjaId;
    });
    setNinjaArr(filteredArr);
  };

  useEffect(() => {
    getAllNinjas();
  }, []);

  return (
    <div className="row">
      {ninjaArr.map((ninja) => {
        return (
          <div className="col" key={ninja.id}>
            <Ninja
              key={ninja.id}
              ninja={ninja}
              onDelete={() => {
                deleteNinja(ninja.id);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default NinjaList;
