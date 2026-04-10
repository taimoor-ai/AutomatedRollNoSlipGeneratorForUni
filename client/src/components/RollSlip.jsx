const RollSlip = ({ student }) => {
  return (
    <div className="slip">
      <h2>UNIVERSITY NAME</h2>
      <h3>Roll Number Slip</h3>

      <div className="info">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Roll No:</strong> {student.roll}</p>
        <p><strong>Class:</strong> {student.class}</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {student.exams.map((exam, i) => (
            <tr key={i}>
              <td>{exam.subject}</td>
              <td>{exam.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="note">Bring this slip to exam hall.</p>
    </div>
  );
};

export default RollSlip;