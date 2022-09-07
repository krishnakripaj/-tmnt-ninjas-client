import React, { useState } from "react";

const Ninja = (props) => {
  const getNinjaStatus = () => {
    return props.ninja.likeCount > 2000 ? "Top Ninja" : "Normal Ninja";
  };

  return (
    <React.Fragment>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.ninja.imgUrl}
          className="card-img-top"
          style={{ maxHeight: "250px" }}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.ninja.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Mutant Type: {props.ninja.isMutant ? "Mutant" : "Not Mutant"}
          </h6>
          <p className="card-text">
            Ninja Status: {getNinjaStatus()}
            <br />
            Nickname: {props.ninja.nickname}
            <br />
            Year: {props.ninja.dob}
          </p>
          <ul>
            {props.ninja.abilities.map((move, index) => {
              return <li key={index}>{move}</li>;
            })}
          </ul>
          <a className="btn btn-primary" onClick={props.onLike}>
            Like{" "}
            <span className="badge text-bg-light">{props.ninja.likeCount}</span>
          </a>{" "}
          <a className="btn btn-danger" onClick={props.onDelete}>
            Delete
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Ninja;
