import Event from "../pages/Event";
import Login from "../pages/Login";

export interface IRoute {
  exact: boolean;
  component: React.ComponentType;
  path: string;
}

export enum RouteNames {
  LOGIN = "/login",
  EVENT = "/",
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.LOGIN, exact: true, component: Login },
];

export const privateRoutes: IRoute[] = [
  { path: RouteNames.EVENT, exact: true, component: Event },
];
