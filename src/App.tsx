import "./App.css";
import Header from "./components/Header/Index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterConfig from "./components/Footer/FooterConfig";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ScrollToTop from "./common/utils/ScrollToTop";
import { CartProvider } from "./common/context/CartContext";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Header onSearch={() => {}} />
        <Routes>
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/produto/:id" element={<ProductDetailsPage />} />
            <Route path="/carrinho" element={<CartPage />} />
          </>
        </Routes>
        <FooterConfig />
      </Router>
    </CartProvider>
  );
}

export default App;
