
import React from 'react';
import { courses } from '../../data/courses';
import { assignments } from '../../data/assignments';
import { submissions } from '../../data/submissions';

const StudentDashboard = () => {
  const studentId = 'S001'; // Simulated logged-in student

  const mySubmissions = submissions.filter(sub => sub.studentId === studentId);
  const submittedAssignmentIds = mySubmissions.map(sub => sub.assignmentId);

  const handleSubmit = (assignmentId: string) => {
    alert(`Assignment ${assignmentId} submitted!`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">My Courses</h2>
      <ul className="mb-4 list-disc pl-5">
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-2">Assignments</h2>
      {assignments.map(assign => (
        <div key={assign.id} className="border p-2 mb-2 rounded">
          <p><strong>{assign.title}</strong> - {assign.description}</p>
          {submittedAssignmentIds.includes(assign.id) ? (
            <p className="text-green-600">Submitted</p>
          ) : (
            <button onClick={() => handleSubmit(assign.id)} className="bg-blue-500 text-white px-2 py-1 mt-1 rounded">
              Submit Assignment
            </button>
          )}
        </div>
      ))}

      <h2 className="text-xl font-bold mt-4 mb-2">Grades</h2>
      <ul className="list-disc pl-5">
        {mySubmissions.map(sub => (
          <li key={sub.assignmentId}>
            Assignment {sub.assignmentId}: {sub.grade || "Not graded yet"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
