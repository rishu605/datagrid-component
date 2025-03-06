import React from "react";

// Define the props for the TableRow component
interface TableRowProps {
    row: any;
    isSelected: boolean;
    onSelectRow: (id: string) => void;
}

const TableRow: React.FC<TableRowProps> = ({ row, isSelected, onSelectRow }) => {
    return (
        <tr>
            <td>
                {/* Render the checkbox for row selection */}
                <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onSelectRow(row.id)}
                />
            </td>
            {/* Render the row data */}
            <td>{row.name}</td>
            <td>{row.device}</td>
            <td>{row.path}</td>
            <td>
                {/* Render the status indicator */}
                <span
                    style={{
                        display: "inline-block",
                        width: "10px",
                        height: "10px",
                        borderRadius: "50%",
                        backgroundColor: row.status === "available" ? "green" : "gray",
                        marginRight: "5px",
                    }}
                ></span>
                {row.status}
            </td>
        </tr>
    );
};

export default TableRow;