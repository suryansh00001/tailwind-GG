export const generateHTML = (cells) => {
  const visibleCells = cells.filter((c) => c.assigned && !c.hidden);

  let html = `<div class="parent">\n`;
  visibleCells.forEach((c) => {
    html += `  <div class="div${c.assignedId}"></div>\n`;
  });
  html += `</div>`;

  return html;
};
