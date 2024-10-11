import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentInfo.css";

function PaymentInfo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Ẩn lỗi khi bắt đầu nhập
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value) {
      error = `${
        name === "name"
          ? "Tên"
          : name === "address"
          ? "Địa chỉ"
          : "Số điện thoại"
      } là bắt buộc.`;
    } else if (name === "phone" && value.length !== 10) {
      error = "Số điện thoại phải có 10 chữ số.";
    }
    return error;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const validate = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleConfirmPayment = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setTimeout(() => {
        navigate("/order-success", { state: { name: formData.name } }); // Truyền đến OrderSuccess
      });
    }
  };

  return (
    <div className="payment-info">
      <h2>Nhập Thông Tin Thanh Toán</h2>
      <form>
        <div>
          <label>Tên:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Địa chỉ:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.address && <p className="error">{errors.address}</p>}
        </div>
        <div>
          <label>Số điện thoại:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <button type="button" onClick={handleConfirmPayment}>
          Xác nhận thanh toán
        </button>
      </form>
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
}

export default PaymentInfo;
