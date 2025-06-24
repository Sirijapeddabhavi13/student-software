export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'student' | 'faculty' | 'admin';
  rollNumber?: string;
  department?: string;
  employeeId?: string;
  designation?: string;
  phone?: string;
  joinDate?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
