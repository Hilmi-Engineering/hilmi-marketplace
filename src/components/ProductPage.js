// src/components/ProductPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          {/* Add more product details here */}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductPage;
