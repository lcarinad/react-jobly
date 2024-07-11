import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";

function AppRoutes({ companies }) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/companies"
        element={<Companies companies={companies} />}
      />
      <Route exact path="/companies/:handle" element={<Company />} />
      <Route exact path="/jobs" element={<Jobs />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default AppRoutes;
