import { Layout, Menu, Row } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "./../hooks/useTypedSelector";

const Navbar = () => {
  const router = useHistory();

  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      {isAuth ? (
        <Row justify="end">
          <div style={{ color: "white" }}>User</div>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item
              onClick={() => {
                router.push(RouteNames.LOGIN);
              }}
              key="logout"
            >
              Log out
            </Menu.Item>
          </Menu>
        </Row>
      ) : (
        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          style={{ display: "flex", justifyContent: "end" }}
        >
          <Menu.Item
            onClick={() => {
              router.push(RouteNames.LOGIN);
            }}
            key="login"
          >
            Login
          </Menu.Item>
        </Menu>
      )}
    </Layout.Header>
  );
};

export default Navbar;
