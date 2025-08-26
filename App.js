
import Registerpage from "./pages/Registerpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./pages/loginpage";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
