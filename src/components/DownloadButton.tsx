import React from "react";

// Define the props for the DownloadButton component
interface DownloadButtonProps {
    data: any[];
    selectedRows: string[];
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ data, selectedRows }) => {
    // Filter the data to get only the selected rows
    const selectedData = data.filter((row) => selectedRows.includes(row.id));

    // Check if all selected rows have the status "available"
    const canDownload = selectedData.every((row) => row.status === "available");
    
    // Handle the download button click
    const handleDownload = () => {
        alert("Selected Rows:\n" + JSON.stringify(selectedData, null, 2));
    };

    return (
        // Render the download button, disable it if not all selected rows are "available"
        <button onClick={handleDownload} disabled={!canDownload} style={{ marginTop: "10px" }}>
            Download Selected
        </button>
    );
};

export default DownloadButton;