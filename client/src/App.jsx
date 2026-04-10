import { useState } from "react";
import UploadDateSheet from "./components/UploadDateSheet";
import { generateRollSlips } from "./utils/parser";
import RollSlip from "./components/RollSlip";
function App() {
  const [students, setStudents] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const [slips, setSlips] = useState([]);
  const handleSelectFile = async () => {
    const data = await window.api.selectExcel();
    console.log(data);
    setStudents(data);
  };

  return (
    <div>
      <h1>Roll No Slip System</h1>
      <UploadDateSheet setParsedData={setParsedData} />
      <button onClick={handleSelectFile}>Select Excel File</button>
      <button
        onClick={() => {
          const result = generateRollSlips(students, parsedData);
          setSlips(result);
        }}
      >
        Generate Roll Slips
      </button>
      {slips.map((s, i) => (
  <RollSlip key={i} student={s} />
))}
      <h2>Students:</h2>
      <pre>{JSON.stringify(students, null, 2)}</pre>
    </div>
  );
}

export default App;
