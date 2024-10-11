import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Checkout.css";

function Checkout() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handlePayment = () => {
    navigate("/payment-info");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="checkout">
      <h2>Thanh Toán</h2>
      {cart.map((product, index) => (
        <div key={index} className="checkout-item">
          <img
            src={product.image}
            alt={product.name}
            className="checkout-item-image"
          />
          <div className="checkout-item-details">
            <h3>{product.name}</h3>
            <p>Đơn giá: {product.price} ₫</p>
            <p>Số lượng: {product.quantity}</p>
            <p>Thành tiền: {product.price * product.quantity} ₫</p>
          </div>
        </div>
      ))}
      <h3>Tổng tiền: {calculateTotal()} ₫</h3>
      <div className="checkout-actions">
        <button className="checkout-button" onClick={handlePayment}>
          Thanh toán
        </button>
        <button className="back-button" onClick={handleGoBack}>
          Quay Lại
        </button>
      </div>
    </div>
  );
}

export default Checkout;
