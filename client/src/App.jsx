import { useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  const handleSelectFile = async () => {
    const data = await window.api.selectExcel();
    console.log(data);
    setStudents(data);
  };

  return (
    <div>
      <h1>Roll No Slip System</h1>

      <button onClick={handleSelectFile}>
        Select Excel File
      </button>

      <h2>Students:</h2>
      <pre>{JSON.stringify(students, null, 2)}</pre>
    </div>
  );
}

export default App;