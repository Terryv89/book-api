import { createBrowserRouter } from "react-router-dom";

import Library from "../pages/Library";
import ShowOneBook from "../pages/ShowOneBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Library />,
  },
  {
    path: "/oneBook/:title",
    element: <ShowOneBook />,
  },
]);

export default router;
