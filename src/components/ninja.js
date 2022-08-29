import React, { useState } from "react";

const Ninja = (props) => {
   const [ninjaLikeCount, setNinjaLikeCount] = useState(props.likeCount);
//   const [ninjaName, setNinjaName] = useState(props.name);
  const [ninjaMoves, setNinjaMoves] = useState([
    "Karate",
    "Acrobatics",
    "Meditation",
  ]);

  const getNinjaStatus = () => {
    return ninjaLikeCount > 25 ? "Top Ninja" : "Normal Ninja";
  };

  const likeNinja = () => {
    console.log("You have liked the Ninja");
    let newLikeCountVal = ninjaLikeCount + 1;
    setNinjaLikeCount(newLikeCountVal);
  };
  return (
    <React.Fragment>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://toppng.com/uploads/preview/teenage-mutant-ninja-turtles-vector-logo-free-download-115740298183llpskkemx.png"
          className="card-img-top"
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Ninja Status: {getNinjaStatus()}</p>
          <ul>
            {ninjaMoves.map((move, index) => {
              return <li key={index}>{move}</li>;
            })}
          </ul>
          <a
            onClick={() => {
              likeNinja();
            }}
            className="btn btn-primary"
          >
            Like <span className="badge text-bg-light">{props.likeCount}</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ninja;
