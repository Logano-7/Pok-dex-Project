import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./Routes/index";
import { HomePage, LibraryPage, PokeViewPage, ComparePage, CreditsPage} from "./Pages/index";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/:id" element={<PokeViewPage />} />
        <Route path="/credits" element={<CreditsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
