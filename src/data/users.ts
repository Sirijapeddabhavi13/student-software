// src/data/users.ts

export const users = [
  {
    id: 's1',
    name: 'Student One',
    username: 'student1',
    password: 'pass1',
    role: 'student',
  },
  {
    id: 'f1',
    name: 'Faculty One',
    username: 'faculty1',
    password: 'pass2',
    role: 'faculty',
  },
  {
    id: 'a1',
    name: 'Admin One',
    username: 'admin1',
    password: 'pass3',
    role: 'admin',
  },
];

export function authenticateUser(username: string, password: string) {
  return users.find(user => user.username === username && user.password === password);
}
