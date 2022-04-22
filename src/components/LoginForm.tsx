import { Button, Form, Input } from "antd";
import React, { FC } from "react";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const submit = () => {
    console.log("submit");
  };

  return (
    <Form onFinish={submit}>
      <Form.Item
        label="Username"
        name="userName"
        rules={[rules.required("Please put username")]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please put password")]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
