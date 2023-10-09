import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import LoginPage from "./components/login/LoginForm";
import RegisterForm from "./components/register/RegisterForm";
import Accuracy from "./components/Accuracy";
// import RegisterGoogle from "./components/register/RegisterGoogle"
// import RegisterFabook from "./components/register/RegisterFabook";
import CategoryAdminPage from "./components/category/Category";
import IndexAdminPage from "./components/admin/homeAdmin";
import ProductAdminPage from "./components/product/Product";
import UserAdminPage from "./components/user/User";
import VerificationAdminPage from "./components/verification/Verification";
import withRequireAuth from "./RequireAuth";



// Wrap protected components with HOC
const ProtectedCategoryAdminPage = withRequireAuth(CategoryAdminPage);
const ProtectedIndexAdminPage = withRequireAuth(IndexAdminPage);
const ProtectedProductAdminPage = withRequireAuth(ProductAdminPage);
const ProtectedUserAdminPage = withRequireAuth(UserAdminPage);
const ProtectedVerificationAdminPage = withRequireAuth(VerificationAdminPage);

function App() {
  return (

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterForm />} />
        {/* <Route path="/registerGoogle" element={<RegisterGoogle />} />
        <Route path="/registerFabook" element={<RegisterFabook />} /> */}
        <Route path="/verification" element={<Accuracy />} />

        {/* Routes chỉ dành cho ROLE_ADMIN */}
        <Route path="/admin/categories" element={<ProtectedCategoryAdminPage />} />
        <Route path="/admin" element={<ProtectedIndexAdminPage />} />
        <Route path="/admin/products" element={<ProtectedProductAdminPage />} />
        <Route path="/admin/user" element={<ProtectedUserAdminPage />} />
        <Route path="/admin/verification" element={<ProtectedVerificationAdminPage />} />
      </Routes>

  );
}

export default App;

