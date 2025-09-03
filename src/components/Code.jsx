import React, { useState } from "react";
import { generateHTML } from "../utils/generateHTML";
import { generateCSS } from "../utils/generateCSS";
import { generateTailwind } from "../utils/generateTailwind";

const Code = ({ cells, rows, cols, gap }) => {
  const [activeTab, setActiveTab] = useState("html");
  const [copied, setCopied] = useState(false);

  const htmlCode = generateHTML(cells);
  const cssCode = generateCSS(cells, rows, cols, gap);
  const tailwindCode = generateTailwind(cells, rows, cols, gap);

  const tabs = [
    { id: "html", label: "HTML", code: htmlCode },
    { id: "css", label: "CSS", code: cssCode },
    { id: "tailwind", label: "Tailwind", code: tailwindCode },
  ];

  const copyToClipboard = () => {
    const code = tabs.find((t) => t.id === activeTab).code;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-[0_4px_16px_rgba(255,105,180,0.15)] border border-pink-200 mt-5 transition-all duration-300 hover:shadow-[0_6px_20px_rgba(255,105,180,0.25)]">
      {/* Tabs */}
      <div className="flex gap-3 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-pink-500 text-white shadow-[0_3px_10px_rgba(236,72,153,0.3)] border-pink-500"
                : "bg-pink-50 text-pink-700 border-pink-300 hover:bg-pink-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className="relative">
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className={`absolute top-2 right-2 px-3 py-1.5 rounded-lg font-semibold text-sm transition-all duration-200 ${
            copied
              ? "bg-green-500 text-white shadow-[0_3px_8px_rgba(34,197,94,0.3)]"
              : "bg-pink-500 text-white shadow-[0_3px_8px_rgba(236,72,153,0.3)] hover:bg-pink-600"
          }`}
        >
          {copied ? "Copied!" : "Copy"}
        </button>

        <pre className="bg-pink-50 text-pink-900 border border-pink-300 rounded-xl p-4 text-sm font-mono overflow-x-auto">
          <code className="whitespace-pre-wrap break-words">
            {tabs.find((t) => t.id === activeTab).code}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default Code;
