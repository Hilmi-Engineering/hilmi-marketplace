import React, { useState } from "react";
import { Button, Input, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { createProduct } from "../api/api"; // Adjust the path as necessary

const CreateProduct = () => {
  const [fileList, setFileList] = useState([]);

  const handleFileChange = ({ file, fileList: newFileList }) => {
    // Filter to ensure only the last uploaded file is kept in case multiple selections are made
    const latestFileList = newFileList.slice(-1);

    setFileList(latestFileList); // Set the file list to include only the last uploaded file

    if (file.status === "done") {
      message.success(`${file.name} file uploaded successfully`);
    } else if (file.status === "error") {
      message.error(`${file.name} file upload failed.`);
    }
  };

  const handleSubmit = (values) => {
    const file = fileList.length ? fileList[0].originFileObj : null;
    if (!file) {
      message.error("Please upload a file!");
      return;
    }
    createProduct(file, values.title, values.description)
      .then((response) => {
        message.success("Product created successfully");
        console.log(response.data);
        setFileList([]); // Clear file list after submission
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
            fileList={fileList}
            beforeUpload={() => false}  // Disable automatic uploading
            onChange={handleFileChange}
            onRemove={() => setFileList([])}
            accept="image/*"  // Optional: only allow image files
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