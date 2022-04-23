import { Layout, Menu, Row } from "antd";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../router";
import { useTypedSelector } from "./../hooks/useTypedSelector";
import { useActions } from "./../hooks/useActions";
import { FC } from "react";

const Navbar: FC = () => {
  const router = useHistory();

  const { logout } = useActions();

  const { isAuth, user } = useTypedSelector((state) => state.auth);

  return (
    <Layout.Header>
      {isAuth ? (
        <Row justify="end">
          <div style={{ color: "white" }}>{user.username}</div>
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={logout} key="logout">
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
