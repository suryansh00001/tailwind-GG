import React from "react";
import { generateHTML } from "../utils/generateHTML";
import { generateCSS } from "../utils/generateCSS";
import { generateTailwind } from "../utils/generateTailwind";

const Header = ({ cells, rows, cols, gap }) => {
  // Export layout code as a .txt file
  const handleExport = () => {
  if (!cells || !Array.isArray(cells)) {
    console.error("cells is undefined or not an array:", cells);
    return;
  }

  const htmlCode = generateHTML(cells, rows, cols, gap);
  const cssCode = generateCSS(cells, rows, cols, gap);
  const tailwindCode = generateTailwind(cells, rows, cols, gap);

  const combinedCode = `
==== HTML ====
${htmlCode}

==== CSS ====
${cssCode}

==== Tailwind ====
${tailwindCode}
  `;

  const blob = new Blob([combinedCode], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "grid-layout.txt";
  a.click();
  URL.revokeObjectURL(url);
};


  return (
    <header className="w-full bg-white shadow-lg border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#ff69b4] to-[#ff85c1] bg-clip-text text-transparent tracking-wide select-none cursor-default">
          🧩 Grid Layout Builder
        </h1>

        {/* Navigation */}
        <nav className="flex items-center gap-4 sm:gap-6 mt-3 sm:mt-0">
          {/* GitHub Button */}
          <button
            onClick={() =>
              window.open("https://github.com/suryansh00001/tailwind-GG", "_blank")
            }
            className="text-gray-700 hover:text-[#ff69b4] font-semibold transition-colors duration-300"
          >
            GitHub
          </button>

          {/* LinkedIn Button */}
          <button
            onClick={() =>
              window.open("https://www.linkedin.com/in/suryansh00001", "_blank")
            }
            className="text-gray-700 hover:text-[#ff69b4] font-semibold transition-colors duration-300"
          >
            LinkedIn
          </button>

          {/* Export Button */}
          <button
            onClick={handleExport}
            className="bg-gradient-to-r from-[#ff69b4] to-[#ff85c1] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Export Code
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
