import React, { useState } from "react";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import DownloadButton from "./DownloadButton";
import { sampleData } from "../data/data";
import { Row } from "../types/types";

const DataGrid: React.FC = () => {
    // Initialize state for the data and selected rows
    const [data, _] = useState(sampleData);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    // Handle individual row selection
    const handleRowSelect = (id: string) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    // Handle "Select All" checkbox logic
    const handleSelectAll = () => {
        if (selectedRows.length === data.length) {
            setSelectedRows([]); // Deselect all rows
        } else {
            setSelectedRows(data.map((row: Row) => row.id)); // Select all rows
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h2>Datagrid</h2>
            <table border={1} width="100%" cellPadding="10">
                {/* Render the table header with select all functionality */}
                <TableHeader
                    data={data}
                    selectedRows={selectedRows}
                    onSelectAll={handleSelectAll}
                />
                <tbody>
                    {/* Render each row in the data grid */}
                    {data.map((row: Row) => (
                        <TableRow
                            key={row.id}
                            row={row}
                            isSelected={selectedRows.includes(row.id)}
                            onSelectRow={handleRowSelect}
                        />
                    ))}
                </tbody>
            </table>
            {/* Render the download button with the selected rows */}
            <DownloadButton data={data} selectedRows={selectedRows} />
        </div>
    );
};

export default DataGrid;