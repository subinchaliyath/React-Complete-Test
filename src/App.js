import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomeScreen from "./components/Home";
import LoginScreen from "./components/LoginScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
