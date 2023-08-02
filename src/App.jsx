import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routes from "./components/Routes";

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>GeekPortales</h1>
          <Navbar />
        </header>
        <main>
          <Routes />
        </main>
        <Footer/>
      </div>
      
    </Router>
  );
}
