// src/data/users.ts

export const users = [
  {
    id: 's1',
    name: 'Student One',
    email: 'student1@example.com',
    password: 'pass1',
    role: 'student',
  },
  {
    id: 'f1',
    name: 'Faculty One',
    email: 'faculty1@example.com',
    password: 'pass2',
    role: 'faculty',
  },
  {
    id: 'a1',
    name: 'Admin One',
    email: 'admin1@example.com',
    password: 'pass3',
    role: 'admin',
  },
];

export function authenticateUser(email: string, password: string) {
  return users.find(user => user.email === email && user.password === password);
}
