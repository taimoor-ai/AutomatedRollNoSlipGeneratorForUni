import { useState } from "react";
import mammoth from "mammoth";
import { parseDateSheet, groupByDate, groupByClassWithPapers } from "../utils/parser";

export default function UploadDateSheet({
  setParsedData,
}) {
  const [tableData, setTableData] = useState([]);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const arrayBuffer = await file.arrayBuffer();
    const result = await mammoth.extractRawText({ arrayBuffer });
    console.log(result.value); // pure text
    const parsed = parseDateSheet(result.value);
    const grouped = groupByDate(parsed);
    const jsonDateSheet=  groupByClassWithPapers(parsed);
    console.log("Parsed Data:", parsed);
    console.log("Grouped by Date:", grouped);
    console.log("Grouped by Class with Papers:", jsonDateSheet);
    setParsedData(jsonDateSheet);
    setTableData(grouped);
  };

  
  return (
    <div>
      <h3>Upload Date Sheet (.doc)</h3>

      <input type="file" onChange={handleFile} />

      <br />
      <br />

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Date</th>
            <th>Classes</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, i) => (
            <tr key={i}>
             
              <td>{row.date}</td>
              <td>{row.classes.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}