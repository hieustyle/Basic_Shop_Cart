import React from "react";
import { useLocation } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  const location = useLocation();
  const { name } = location.state || { name: "Quý khách" };

  return (
    <div className="order-success">
      <h2>Đặt Hàng Thành Công!</h2>
      <p>Chúc mừng {name}! Đặt hàng của bạn đã được xác nhận.</p>
      <p>Cảm ơn bạn đã mua hàng.</p>
    </div>
  );
}

export default OrderSuccess;
