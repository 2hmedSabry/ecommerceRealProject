import NavbarLogin from "./components/Utility/NavbarLogin";
import Footer from "./components/Utility/Footer";
import HomePage from "./Page/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllCategoryPage from "./Page/Category/AllCategoryPage";
import AllBrand from "./Page/Brand/AllBrand";
import ShopProductsPage from "./Page/Products/ShopProductsPage";
function App() {
  return (
    <div className="font">
      <NavbarLogin />

      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/allcategory" element={<AllCategoryPage />} />
          <Route path="/allbrand" element={<AllBrand />} />
          <Route path="/products" element={<ShopProductsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App;
