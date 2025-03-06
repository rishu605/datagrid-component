import React from "react";

// Define the props for the TableHeader component
interface TableHeaderProps {
    data: any[];
    selectedRows: string[];
    onSelectAll: () => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ data, selectedRows, onSelectAll }) => {
    // Determine if all rows are selected
    const isAllSelected = selectedRows.length === data.length;
    // Determine if the selection is indeterminate (some but not all rows are selected)
    const isIndeterminate = selectedRows.length > 0 && selectedRows.length < data.length;

    return (
        <thead>
            <tr>
                <th>
                    {/* Render the "Select All" checkbox */}
                    <input
                        type="checkbox"
                        onChange={onSelectAll}
                        checked={isAllSelected}
                        ref={(input) => {
                            if (input) {
                                // Set the indeterminate state of the checkbox
                                input.indeterminate = isIndeterminate;
                            }
                        }}
                    />
                    {/* Display the number of selected rows */}
                    {selectedRows.length > 0 ? ` ${selectedRows.length} Selected` : " None Selected"}
                </th>
                <th>Name</th>
                <th>Device</th>
                <th>Path</th>
                <th>Status</th>
            </tr>
        </thead>
    );
};

export default TableHeader;