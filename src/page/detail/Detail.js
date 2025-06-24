import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const { Meta } = Card;

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const { addMovie } = useCart();
  const navigate = useNavigate();


  const handleAddToCart = () => {
    addMovie(product);
    navigate('/Cart');
  };

  useEffect(() => {
    axios.get(`https://backend-crud-one.vercel.app/product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch product");
      });
  }, [id]);

  if (location.pathname === "/CustomCard") return null;
  if (error) return <p className="text-danger text-center">{error}</p>;
  if (!product) return <p className="text-center">Loading...</p>;


  return (
    <div className="container mt-5">
      <h1 className="text-center mt-5 mb-4">{product.name}</h1>

      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow"
            style={{ height: '500px', objectFit: 'cover', width: '100%'}}
          />
        </div>
        <div className="col-md-6">
          <Card>
            <Meta title={product.director} />
            <p className="mt-3"><b>Release Date:</b> {product.releasedate}</p>
            <p><b>Ticket Price:</b> ₹{product.ticketprice}</p>
            <p><b>Description:</b> {product.description}</p>
            <div className="text-center mt-4">
              <Link to="/Cart">
              <button type="button" className="btn btn-success" onClick={handleAddToCart}>
      Add to Cart
    </button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Detail;