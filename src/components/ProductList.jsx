import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductList.css";
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

function ProductList() {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => handleProductClick(product.id)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">{product.price}đ</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
