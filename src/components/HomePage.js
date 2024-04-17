// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import axios from 'axios';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products?sort=views')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {products.map((product) => (
          <Col span={8} key={product.id}>
            <Card title={product.title} bordered={false}>
              {product.description}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;
