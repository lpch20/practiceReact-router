import React, { useState } from "react";
import "./Libros.css";
import { Link, Outlet, useParams } from "react-router-dom";

function Libros() {

  const [libros, setLibros] = useState([
    {
      nombre: "Libro Harry Potter",
      img: <img src="/img/harry-potter-.jpg" alt="" />,
      precio: "Precio: $500",
      id: 1
    },
    {
      nombre: "Libro Spiderman",
      img: <img src="/img/libro-spiderman.jpg" alt="" />,
      precio: "Precio: $500",
      id: 2
    },
  ]);


  return (
    <div>
      <h1>BIENVENIDOS A LIBROS</h1>
      <div id="libros" className="libros">
        <div className="classLibros">
          {libros.map((libro) => {
            return (
              <div>
                <Link to={`detalle-libro/${libro.id}`}>
                <h4>{libro.nombre}</h4>
                </Link>
              </div>
            );
          })}
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Libros;
