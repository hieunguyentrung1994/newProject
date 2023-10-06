import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import LoginPage from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";
import Accuracy from "./components/Accuracy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/verification" element={<Accuracy />} />
    </Routes>
  );
}
export default App;
