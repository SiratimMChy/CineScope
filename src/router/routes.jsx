import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <Movies />,
      }
    ],
  },
]);

export default router;