import React, { useState, useEffect } from "react";

const Themetoggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default Themetoggle;
