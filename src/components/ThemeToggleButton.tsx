"use client";

import { useState, useEffect } from "react";

export default function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full">
      {darkMode ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v2m6.364 1.636l-1.414 1.414m4.95 3.95h-2m-1.636 6.364l-1.414-1.414m-3.95 4.95v-2m-6.364-1.636l1.414-1.414m-4.95-3.95h2m1.636-6.364l1.414 1.414M12 5a7 7 0 00-7 7h2a5 5 0 015-5V5zm0 14a7 7 0 007-7h-2a5 5 0 01-5 5v2z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"
          />
        </svg>
      )}
    </button>
  );
}
