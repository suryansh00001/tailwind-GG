export const generateTailwind = (cells, rows, cols, gap) => {
  const visibleCells = cells.filter((c) => c.assigned && !c.hidden);

  let tw = `<div class="grid grid-cols-${cols} grid-rows-${rows} gap-[${gap}px]">\n`;
  visibleCells.forEach((c) => {
    tw += `  <div class="div${c.assignedId} col-start-${c.col} row-start-${c.row} col-span-${c.colSpan} row-span-${c.rowSpan} bg-gray-800 rounded-lg"></div>\n`;
  });
  tw += `</div>`;

  return tw;
};
