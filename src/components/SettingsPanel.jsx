import React from "react";

export default function SettingsPanel({
  rows,
  setRows,
  cols,
  setCols,
  rowGap,
  setRowGap,
  colGap,
  setColGap,
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-[0_4px_16px_rgba(255,105,180,0.15)] border border-pink-200 max-w-xs w-full transition-all duration-300 hover:shadow-[0_6px_20px_rgba(255,105,180,0.25)]">
      {/* Title */}
      <h2 className="text-xl font-bold text-pink-500 mb-5">⚙️ Grid Settings</h2>

      {/* Rows */}
      <label className="flex flex-col mb-4 text-pink-700 text-sm font-medium">
        <span>Rows</span>
        <input
          type="number"
          min="1"
          value={rows}
          onChange={(e) => setRows(Number(e.target.value))}
          placeholder="Enter number of rows"
          className="mt-1 px-3 py-2 rounded-lg border border-pink-300 bg-pink-50 text-pink-900 text-sm transition-all focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300 placeholder-pink-400"
        />
      </label>

      {/* Columns */}
      <label className="flex flex-col mb-4 text-pink-700 text-sm font-medium">
        <span>Columns</span>
        <input
          type="number"
          min="1"
          value={cols}
          onChange={(e) => setCols(Number(e.target.value))}
          placeholder="Enter number of columns"
          className="mt-1 px-3 py-2 rounded-lg border border-pink-300 bg-pink-50 text-pink-900 text-sm transition-all focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-300 placeholder-pink-400"
        />
      </label>
    </div>
  );
}
