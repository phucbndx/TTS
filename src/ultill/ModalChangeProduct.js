import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../Store/Actions/Action";
import { addUser, updateUser } from "../Store/Actions/AuthAction";
const ModalChangeProduct = (props) => {
  const [show, setShow] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleOk = () => {
    setShow(false);
  };
  useEffect(() => {
    form.setFieldsValue({
      id: props.data.id,
      title: props.data.title,
      category: props.data.category,
      description: props.data.description,
      image: props.data.image,
      price: props.data.price,
    });
  }, []);
  useEffect(() => {
    setShow(props.show);
  }, [props]);
  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(updateProduct(values.id, values));
    props.setShow(false);
  };
  const handleCancel = () => {
    setShow(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Modal
        forceRender
        getContainer={false}
        title="Basic Modal"
        open={show}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="id"
            name="id"
            rules={[{ required: false, message: "Please input your id!" }]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input your price!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="image"
            name="image"
            rules={[
              {
                required: true,
                message: "Please input your image!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input your category!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="danger" htmlType="submit">
              Change Product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default ModalChangeProduct;
