import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  return (
    <div className="overflow-hidden">
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Pricing />} />
        </Routes>
        <Card />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
}

export default App;
