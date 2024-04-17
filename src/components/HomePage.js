// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the most viewed products
    // Example: axios.get('/api/products?sort=views')
    // setProducts(response.data);
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
