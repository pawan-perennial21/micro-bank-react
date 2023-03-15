import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import Dashboard from "./components/dashboard";
import AuthLayout from "./layout/authLayout";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
