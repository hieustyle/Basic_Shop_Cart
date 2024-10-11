import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../components/CartContext";
import "./ProductDetail.css";
import "semantic-ui-css/semantic.min.css";
import "semantic-ui-css/semantic.min.js";
import airtag from "../assets/airtag.jpeg";
import iphone from "../assets/iphone.jpg";
import macbook from "../assets/macbook.jpeg";
import dongHo from "../assets/smartwatch.jpeg";
import ApplePencil from "../assets/pencil.jpeg";
import khan from "../assets/khan.jpeg";
import Airpods from "../assets/airpods.jpeg";
import chuot from "../assets/chuot.jpeg";
import trackpad from "../assets/trackpad.png";
import AppleVesion from "../assets/apple vesion.jpg";
import loa from "../assets/loaApple.jpg";
import AirpodsMax from "../assets/airport max.jpeg";
const products = [
  {
    id: 1,
    name: "Xe máy Honda Vision 2023",
    price: 36000000,
    image: airtag,
  },
  {
    id: 2,
    name: "Iphone 16 Pro Max",
    price: 30000000,
    image: iphone,
  },
  {
    id: 3,
    name: "MacBook M4 pro",
    price: 120000000,
    image: macbook,
  },
  {
    id: 4,
    name: "Đồng Hồ",
    price: 10000000,
    image: dongHo,
  },
  {
    id: 5,
    name: "Viết Apple pencil",
    price: 3000000,
    image: ApplePencil,
  },
  {
    id: 6,
    name: "Khăn Apple",
    price: 500000,
    image: khan,
  },
  {
    id: 7,
    name: "AirPods 5 pro",
    price: 6000000,
    image: Airpods,
  },
  {
    id: 8,
    name: "Magic mouse",
    price: 2000000,
    image: chuot,
  },
  {
    id: 9,
    name: "TrackPad",
    price: 5000000,
    image: trackpad,
  },
  {
    id: 10,
    name: "Apple vesion",
    price: 25000000,
    image: AppleVesion,
  },
  {
    id: 11,
    name: "AirPods Max",
    price: 12000000,
    image: AirpodsMax,
  },
  {
    id: 12,
    name: "Loa Aplle",
    price: 7000000,
    image: loa,
  },
];

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price}đ</p>
        <p className="discount">{product.discount}</p>
        <div className="actions">
          <button className="buy-now" onClick={handleBuyNow}>
            Mua Ngay
          </button>
          <button className="add-to-cart" onClick={handleAddToCart}>
            Thêm vào Giỏ Hàng
          </button>
          <button className="back-button" onClick={handleGoBack}>
            Quay Lại
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
