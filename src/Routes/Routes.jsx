import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../components/About/About";
import SingleBookDetail from "../pages/SingleBookDetail/SingleBookDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/SingleBookDetail/:bookId",
        loader: () => fetch("/booksData.json").then((res) => res.json()),
        Component: SingleBookDetail,
      },
    ],
  },
]);
