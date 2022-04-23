import { Button, Form, Input } from "antd";
import { FC, useState } from "react";
import { rules } from "../utils/rules";
import { useTypedSelector } from "./../hooks/useTypedSelector";
import { useActions } from "./../hooks/useActions";

const LoginForm: FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { login } = useActions();
  const { error, isLoading } = useTypedSelector((state) => state.auth);

  const submit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please put username")]}
      >
        <Input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please put password")]}
      >
        <Input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type={"password"}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
