import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "antd";
import { Link } from "react-router-dom";


const { Meta } = Card;

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("https://backend-crud-one.vercel.app/product")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("fetch error:", error));
  }, []);

  if (location.pathname === "/Contactpage") return null;

  return (
    <div className="container mt-3">
      <div className="row">
        {products.map((product) => (
          <div className="col-lg-3 mb-4" key={product._id}>
            <Card
              hoverable
              cover={
                <img
                  alt="movie"
                  src={product.image}
                  height={300}
                  style={{ objectFit: "cover" }}
                />
              }
            >
              <Meta title={product.name} />
              <br />
              <p>{product.director}</p>
              <p><b>Release date:</b> {product.releasedate}</p>
              <p><b>Price:</b> {product.ticketprice}rs</p>

              <Link to={`/${product._id}`}>
                <button className="btn btn-primary mb-2">View Details</button>
              </Link>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
