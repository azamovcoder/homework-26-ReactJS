import "./App.css";

import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
