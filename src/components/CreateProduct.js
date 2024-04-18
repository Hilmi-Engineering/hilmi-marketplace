// src/components/CreateProduct.js
import React, { useState } from "react";
import { Button, Input, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createProduct } from "../api/api"; // Adjust the path as necessary

const CreateProduct = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (info) => {
    console.log("IN FILE CHANGE HANDLER")
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
      setFile(info.file.originFileObj);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleSubmit = (values) => {
    if (!file) {
      message.error("Please upload a file!");
      return;
    }
    createProduct(file, values.title, values.description)
      .then((response) => {
        message.success("Product created successfully");
        console.log(response.data);
      })
      .catch((error) => {
        message.error("Failed to create product");
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>Create Your Product</h1>
      <Form onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="title"
          label="Product Title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input placeholder="Enter product title" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Product Description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <Input.TextArea placeholder="Enter product description" />
        </Form.Item>
        <Form.Item label="Upload Image" valuePropName="fileList">
          <Upload
            name="logo"
            listType="picture"
            beforeUpload={() => false}
            onChange={handleFileChange}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProduct;
