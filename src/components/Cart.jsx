import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./Cart.css";

function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleQuantityChange = (index, event) => {
    const quantity = parseInt(event.target.value);
    if (quantity > 0) {
      updateQuantity(index, quantity);
    }
  };

  const handleRemove = (index) => {
    removeFromCart(index);
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="cart">
      <h2>Giỏ Hàng</h2>
      {cart.map((product, index) => (
        <div key={index} className="cart-item">
          <img
            src={product.image}
            alt={product.name}
            className="cart-item-image"
          />
          <div className="cart-item-details">
            <h3>{product.name}</h3>
            <p>Đơn giá: {product.price} ₫</p>
            <p>
              Số lượng:
              <input
                type="number"
                value={product.quantity}
                onChange={(e) => handleQuantityChange(index, e)}
                min="1"
              />
            </p>
            <p>Thành tiền: {product.price * product.quantity} ₫</p>
            <button onClick={() => handleRemove(index)}>Xóa</button>
          </div>
        </div>
      ))}
      <h3>Tổng tiền: {calculateTotal()} ₫</h3>
      <div className="cart-actions">
        <button onClick={handleCheckout} className="checkout-button">
          Thanh Toán
        </button>
        <button onClick={handleGoBack} className="back-button">
          Quay Lại
        </button>
      </div>
    </div>
  );
}

export default Cart;
