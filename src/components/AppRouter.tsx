import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { publicRoutes, privateRoutes, RouteNames } from "../router/index";
import { useTypedSelector } from "./../hooks/useTypedSelector";

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);

  return (
    <>
      {isAuth ? (
        <Switch>
          {privateRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
          <Redirect to={RouteNames.EVENT} />
        </Switch>
      ) : (
        <Switch>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
          <Redirect to={RouteNames.LOGIN} />
        </Switch>
      )}
    </>
  );
};

export default AppRouter;
