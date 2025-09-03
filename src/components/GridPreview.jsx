import React, { useState } from "react";

const GridPreview = ({ rows, cols, gap, cells, setCells, nextId, setNextId }) => {
    const [firstCell, setFirstCell] = useState(null);

    const handleAssign = (id) => {
        setCells((prev) =>
            prev.map((c) => {
                if (c.id === id) {
                    if (c.assigned) return c;
                    return { ...c, assigned: true, assignedId: nextId };
                }
                return c;
            })
        );

        const clickedCell = cells.find((c) => c.id === id);
        if (!clickedCell.assigned) {
            setNextId((prev) => prev + 1);
        }
        setTimeout(() => reorderAssignedIds(), 0);
    };

    const handleMergeClick = (cell) => {
        if (!firstCell) {
            setFirstCell(cell);
        } else {
            mergeCells(firstCell, cell);
            setFirstCell(null);
        }
    };

    const handleReset = () => {
        setCells((prev) =>
            prev.map((c) => ({
                ...c,
                assigned: false,
                assignedId: null,
                rowSpan: 1,
                colSpan: 1,
                hidden: false,
            }))
        );
        setNextId(1);
        setFirstCell(null);
    };

    const mergeCells = (startCell, endCell) => {
        const top = Math.min(startCell.row, endCell.row);
        const bottom = Math.max(startCell.row, endCell.row);
        const left = Math.min(startCell.col, endCell.col);
        const right = Math.max(startCell.col, endCell.col);

        const assignedIdsInBlock = cells
            .filter(
                (c) =>
                    c.row >= top &&
                    c.row <= bottom &&
                    c.col >= left &&
                    c.col <= right &&
                    c.assigned
            )
            .map((c) => c.assignedId);

        let assignedId;
        if (assignedIdsInBlock.length > 0) {
            assignedId = Math.min(...assignedIdsInBlock);
        } else {
            assignedId = nextId;
            setNextId((prev) => prev + 1);
        }

        setCells((prev) =>
            prev.map((c) => {
                if (c.row === top && c.col === left) {
                    return {
                        ...c,
                        rowSpan: bottom - top + 1,
                        colSpan: right - left + 1,
                        assigned: true,
                        assignedId: assignedId,
                        hidden: false,
                    };
                }
                if (
                    c.row >= top &&
                    c.row <= bottom &&
                    c.col >= left &&
                    c.col <= right &&
                    !(c.row === top && c.col === left)
                ) {
                    return { ...c, hidden: true };
                }
                return c;
            })
        );
        setTimeout(() => reorderAssignedIds(), 0);
    };

    const reorderAssignedIds = () => {
        setCells((prev) => {
            const assignedCells = prev
                .filter((c) => c.assigned && !c.hidden)
                .sort((a, b) => a.assignedId - b.assignedId);

            const idMapping = {};
            assignedCells.forEach((cell, idx) => {
                idMapping[cell.assignedId] = idx + 1;
            });

            const updatedCells = prev.map((c) =>
                c.assigned
                    ? { ...c, assignedId: idMapping[c.assignedId] }
                    : c
            );

            const newNextId = assignedCells.length + 1;
            setNextId(newNextId);

            return updatedCells;
        });
    };

    return (
        <div>
        <button
    onClick={handleReset}
    className="mb-6 mx-auto block bg-gradient-to-r from-[#ff69b4] to-[#ff85c1] text-white font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
    style={{
        boxShadow: "0 4px 15px rgba(223, 151, 183, 0.96)",
    }}
>
    Reset Layout
</button>

        
        <div
            className="grid p-8 rounded-3xl shadow-2xl transition-all duration-300"
            style={{
                background: "#fffafd",
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                gap: `${gap}px`,
                border: "1px solid #ffc2d1",
            }}
        >
            {cells.filter((c) => !c.hidden).map((c) => (
                <div
                    key={c.id}
                    className={`border flex items-center justify-center cursor-pointer relative group rounded-2xl transition-all duration-300
                        ${
                            firstCell && firstCell.id === c.id
                                ? "ring-2 ring-pink-500"
                                : "hover:scale-[1.05] hover:shadow-lg"
                        }`}
                    style={{
                        gridColumn: `${c.col} / span ${c.colSpan}`,
                        gridRow: `${c.row} / span ${c.rowSpan}`,
                        background: c.assigned
                            ? "#fff"
                            : "#fff5f7",
                        borderColor:
                            firstCell && firstCell.id === c.id
                                ? "#ff6b9d"
                                : "#ffc2d1",
                        boxShadow: c.assigned
                            ? "0 3px 12px rgba(255, 107, 157, 0.15)"
                            : "0 2px 6px rgba(255, 107, 157, 0.08)",
                    }}
                    onClick={() => {
                        if (firstCell && firstCell.id !== c.id) {
                            handleMergeClick(c);
                        } else if (!c.assigned) {
                            handleAssign(c.id);
                        } else {
                            handleMergeClick(c);
                        }
                    }}
                >
                    <span
                        className="font-semibold text-lg"
                        style={{
                            color: c.assigned ? "#ff3e7f" : "#ff6b9d",
                            fontWeight: 700,
                            letterSpacing: "0.02em",
                        }}
                    >
                        {c.assigned ? c.assignedId : "+"}
                    </span>
                </div>
                
            ))}
            {/* ✅ Reset Button */}
            
        </div>
        </div>
    );
};

export default GridPreview;
