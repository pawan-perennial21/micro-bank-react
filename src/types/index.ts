export interface AuthState {
  isAuthenticated: boolean;
  error: string;
  user: {};
}

export interface LoginState {
  email: string;
  password: string;
}

export interface RegistrationState {
  fullName: string;
  dateOfIncorporation: string;
  email: string;
  password: string;
  confirmPassword: string;
}
