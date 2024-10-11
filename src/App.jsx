import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import PaymentInfo from "./components/PaymentInfo";
import OrderSuccess from "./components/OrderSuccess";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-info" element={<PaymentInfo />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
