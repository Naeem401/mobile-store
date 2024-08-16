import { createBrowserRouter } from "react-router-dom";
import AllProducts from "../components/Products/AllProducts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <AllProducts/>,
    },
  ]);