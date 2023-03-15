import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../../types";

export const initialState: AuthState = {
  isAuthenticated: false,
  error: "",
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// The reducer
export default authSlice.reducer;
