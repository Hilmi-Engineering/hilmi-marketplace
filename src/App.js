// import logo from './logo.svg';
// import './App.css';

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import VendorPage from './components/VendorPage';
import CreateProduct from './components/CreateProduct';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/create-product">Create Product</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/product/:productId" component={ProductPage} />
            <Route path="/vendor/:vendorId" component={VendorPage} />
            <Route path="/create-product" component={CreateProduct} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Router>
  );
}

export default App;
