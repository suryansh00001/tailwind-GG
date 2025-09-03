import React, { useState, useEffect } from "react";
import GridPreview from "./components/GridPreview";
import SettingsPanel from "./components/SettingsPanel";
import Code from "./components/Code";
import Header from "./components/Header";

const App = () => {
  const [rows, setRows] = useState(5);
  const [cols, setCols] = useState(5);
  const [gap, setGap] = useState(8);

  const [cells, setCells] = useState([]);
  const [nextId, setNextId] = useState(1);

  // Whenever rows or cols change → regenerate fresh cells
  useEffect(() => {
    setCells(
      Array.from({ length: rows * cols }, (_, i) => {
        const row = Math.floor(i / cols) + 1;
        const col = (i % cols) + 1;
        return {
          id: i + 1,
          assignedId: null,
          assigned: false,
          row,
          col,
          rowSpan: 1,
          colSpan: 1,
          hidden: false,
        };
      })
    );
    setNextId(1); // Reset numbering when grid size changes
  }, [rows, cols]);

  return (
    <div className="bg-white min-h-screen text-black p-6 flex flex-col gap-6">
      {/* Settings */}
      <Header cells={cells} rows={rows} cols={cols} gap={gap} />

      
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <SettingsPanel
          rows={rows}
          cols={cols}
          gap={gap}
          setRows={setRows}
          setCols={setCols}
          setGap={setGap}
        />
      </div>
      

      {/* Live Preview */}
      <GridPreview
        rows={rows}
        cols={cols}
        gap={gap}
        cells={cells}
        setCells={setCells}
        nextId={nextId}
        setNextId={setNextId}
      />

      {/* Generated Code */}
      <Code
        cells={cells}
        rows={rows}
        cols={cols}
        gap={gap}
      />

      <div className="text-center text-sm text-gray-500 mt-4">Build with love ❤️ by Suryansh</div>
    </div>

  );
};

export default App;
