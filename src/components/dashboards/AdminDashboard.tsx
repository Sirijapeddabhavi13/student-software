
import React, { useState } from 'react';
import { users } from '../../data/users';
import { timetables } from '../../data/timetables';

const AdminDashboard = () => {
  const [facultyId, setFacultyId] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [course, setCourse] = useState('');

  const handleAddTimetable = () => {
    alert(`Timetable updated for ${facultyId}`);
    setDay(''); setTime(''); setCourse('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Management</h2>
      <ul className="list-disc pl-5 mb-6">
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.role}</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mb-2">Timetable Management</h2>
      <div className="mb-4">
        <input placeholder="Faculty ID" value={facultyId} onChange={e => setFacultyId(e.target.value)} className="border p-1 mr-2"/>
        <input placeholder="Day" value={day} onChange={e => setDay(e.target.value)} className="border p-1 mr-2"/>
        <input placeholder="Time" value={time} onChange={e => setTime(e.target.value)} className="border p-1 mr-2"/>
        <input placeholder="Course" value={course} onChange={e => setCourse(e.target.value)} className="border p-1 mr-2"/>
        <button onClick={handleAddTimetable} className="bg-purple-600 text-white px-3 py-1 rounded">Update</button>
      </div>

      <h3 className="text-lg font-semibold">Current Timetables</h3>
      <ul className="list-disc pl-5">
        {Object.entries(timetables).map(([fid, slots]) => (
          <li key={fid}>
            {fid}:
            <ul className="list-circle pl-5">
              {slots.map((s, idx) => (
                <li key={idx}>{s.day} - {s.time} - {s.course}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
