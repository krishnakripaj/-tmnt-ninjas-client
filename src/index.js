import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import NinjaList from "./components/ninjaList";
import Navbar from "./components/layout/navbar";
import Home from "./components/home";
import NinjaDetails from "./components/ninjaDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/ninjas" element={<NinjaList />}></Route>
      <Route exact path="/ninjas/:ninjaId" element={<NinjaDetails />}></Route>
    </Routes>
  </Router>
);
