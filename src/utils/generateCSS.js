export const generateCSS = (cells, rows, cols, gap) => {
  const visibleCells = cells.filter((c) => c.assigned && !c.hidden);

  let css = `.parent {
  display: grid;
  grid-template-columns: repeat(${cols}, 1fr);
  grid-template-rows: repeat(${rows}, 1fr);
  gap: ${gap}px;
}\n\n`;

  visibleCells.forEach((c) => {
    css += `.div${c.assignedId} {
  grid-column: ${c.col} / span ${c.colSpan};
  grid-row: ${c.row} / span ${c.rowSpan};
}\n\n`;
  });

  return css.trim();
};
