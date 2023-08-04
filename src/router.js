import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Auth from "./pages/Auth";
import Products from "./pages/Products";
import InputProduct from "./pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/addproduct",
    element: <InputProduct />,
  },
]);

export default router;
