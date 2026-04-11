const RollSlip = ({ student }) => {

  const getDay = (dateStr) => {
    try {
      const d = new Date(dateStr.split("-").reverse().join("-"));
      return d.toLocaleDateString("en-US", { weekday: "short" });
    } catch {
      return "-";
    }
  };

  return (
    <article className="overflow-hidden rounded-xl border border-slate-700 bg-white text-black print:border-black print:bg-white">

      {/* HEADER */}
      <div className="border-b border-slate-300 px-4 py-3 text-center">
        <h2 className="text-lg font-bold">Dr. A.Q. Khan Institute of Computer Sciences</h2>
        <p className="text-sm">& Information Technology - KRL, Kahuta</p>
        <h3 className="mt-2 text-base font-semibold underline">ROLL NO. SLIP</h3>
      </div>

      {/* STUDENT INFO */}
      <div className="grid gap-2 border-b border-slate-300 px-4 py-3 text-sm sm:grid-cols-3">
        <p>
          <span className="font-semibold">Name: </span>
          {student.Name || "-"}
        </p>
        <p>
          <span className="font-semibold">Roll No: </span>
          {student["Reg#"] || "-"}
        </p>
        <p>
          <span className="font-semibold">Class: </span>
          {student.class || "-"}
        </p>
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-slate-300 text-sm">
          <thead className="bg-slate-200">
            <tr>
              <th className="border px-2 py-1">S.No</th>
              <th className="border px-2 py-1">Subject</th>
              <th className="border px-2 py-1">Date</th>
              <th className="border px-2 py-1">Day</th>
            </tr>
          </thead>

          <tbody>
            {(student.exams || []).length ? (
              student.exams.map((exam, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1 text-center">{index + 1}</td>
                  <td className="border px-2 py-1">{exam.subject}</td>
                  <td className="border px-2 py-1 text-center">{exam.date}</td>
                  <td className="border px-2 py-1 text-center">{getDay(exam.date)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="border px-3 py-2 text-center text-gray-500">
                  No papers mapped for this class
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* NOTES */}
      <div className="px-4 py-3 text-xs leading-relaxed">
        <p><strong>Note:</strong></p>
        <p>1. Paper will start at 10:30 hrs (Friday 09:30 hrs).</p>
        <p>2. Students must reach 15 minutes before exam.</p>
        <p>3. Mobile phones are strictly prohibited.</p>
        <p>4. Bring your own stationery.</p>
      </div>

      {/* SIGNATURE */}
      <div className="px-4 pb-4 text-right">
        ______________________
      </div>

    </article>
  );
};

export default RollSlip;