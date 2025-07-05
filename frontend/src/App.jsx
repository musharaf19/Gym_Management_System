import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

useEffect(() => {
  localStorage.setItem("darkMode", darkMode);
  document.body.classList.toggle("dark", darkMode);
}, [darkMode]);


  return (
    <Router>
      <div style={{ minHeight: "100vh", transition: "0.3s" }}>
        {/* Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="theme-toggle-button"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <Navbar />
        <Hero />
        <WorkoutSessions />
        <Gallery />
        <Pricing />
        <Contact />
        <BMICalculator />
        <Footer />

        <ToastContainer theme={darkMode ? "dark" : "light"} position="top-center" />
      </div>
    </Router>
  );
};

export default App;
