import { createBrowserRouter } from "react-router";
import Home from "../pages/home/Home";
const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);

export default router;
