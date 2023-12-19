import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./main.css";

import Profile from "./pages/Profile";
import Repository from "./pages/Repository";
import Issues from "./pages/Issues";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:repo" element={<Repository />} />
        <Route path="/:username/:repo/issues" element={<Issues />} />
      </Routes>
    </div>
  );
}

export default App;
