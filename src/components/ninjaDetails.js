import React from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const NinjaDetails = () => {
  let params = useParams();
  let navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <React.Fragment>
      <h1>NinjaDetails {params.ninjaId}</h1>
      <button onClick={goHome}>Home</button>
      <button onClick={goBack}>Go Back</button>
    </React.Fragment>
  );
};

export default NinjaDetails;
