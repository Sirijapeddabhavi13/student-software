
import React, { useState } from 'react';
import { timetables } from '../../data/timetables';
import { assignments } from '../../data/assignments';
import { submissions } from '../../data/submissions';

const FacultyDashboard = () => {
  const facultyId = 'F001'; // Simulated logged-in faculty

  const myTimetable = timetables[facultyId] || [];
  const myAssignments = assignments.filter(a => a.facultyId === facultyId);
  const mySubmissions = submissions.filter(s => myAssignments.some(a => a.id === s.assignmentId));

  const [newTitle, setNewTitle] = useState('');

  const handlePostAssignment = () => {
    alert(`Assignment "${newTitle}" posted!`);
    setNewTitle('');
  };

  const handleGrade = (studentId: string, assignmentId: string) => {
    alert(`Graded student ${studentId} for assignment ${assignmentId}`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">My Timetable</h2>
      <ul className="list-disc pl-5 mb-4">
        {myTimetable.map((entry, i) => (
          <li key={i}>{entry.day} at {entry.time} - {entry.course}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-2">Post Assignment</h2>
      <input
        type="text"
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
        placeholder="Enter assignment title"
        className="border p-1 mr-2"
      />
      <button onClick={handlePostAssignment} className="bg-green-600 text-white px-3 py-1 rounded">Post</button>

      <h2 className="text-xl font-bold mt-4 mb-2">Submissions</h2>
      {mySubmissions.map((s, i) => (
        <div key={i} className="border p-2 mb-2 rounded">
          <p>Student: {s.studentId}</p>
          <p>Assignment: {s.assignmentId}</p>
          <p>Content: {s.content}</p>
          <p>Grade: {s.grade || "Not graded"}</p>
          <button onClick={() => handleGrade(s.studentId, s.assignmentId)} className="bg-blue-500 text-white px-2 py-1 mt-1 rounded">
            Grade
          </button>
        </div>
      ))}
    </div>
  );
};

export default FacultyDashboard;
