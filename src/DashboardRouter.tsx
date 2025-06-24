
import React from 'react';
import { useAuth } from './context/AuthContext';
import StudentDashboard from './components/dashboards/StudentDashboard';
import FacultyDashboard from './components/dashboards/FacultyDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';

const DashboardRouter = () => {
  const { user } = useAuth();

  if (!user) return <div>Loading...</div>;
  if (user.role === 'student') return <StudentDashboard />;
  if (user.role === 'faculty') return <FacultyDashboard />;
  if (user.role === 'admin') return <AdminDashboard />;

  return <div>Unknown role</div>;
};

export default DashboardRouter;
