import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Cursos from "./components/Cursos/Cursos";
import Contactos from "./components/Contactos/Contactos";
import Libros from "./components/Libros/Libros";
import App from "./App";
import DetalleLibros from "./components/DetalleLibros/DetalleLibros";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/cursos",
    element: <Cursos></Cursos>,
  },
  {
    path: "/contactos",
    element: <Contactos></Contactos>,
  },
  {
    path: "/libros",
    element: <Libros></Libros>,
    // children:[
    //   {
    //     path: "detalle-libro/:id",
    //     element: <DetalleLibros></DetalleLibros>
    //   }
    // ]
  },
  {
    path: "/libros/detalle-libro/:id",
    element: <DetalleLibros></DetalleLibros>,
    errorElement: <ErrorPage></ErrorPage>
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
