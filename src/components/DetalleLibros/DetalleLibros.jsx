import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetalleLibros() {
  const { id } = useParams();
  const [libros, setLibros] = useState([
    {
      nombre: "Libro Harry Potter",
      img: <img src="/img/harry-potter-.jpg" alt="" />,
      precio: "Precio: $500",
      id: 1,
    },
    {
      nombre: "Libro Spiderman",
      img: <img src="/img/libro-spiderman.jpg" alt="" />,
      precio: "Precio: $500",
      id: 2,
    },
  ]);

  const [librosSeleccionado, setLibroSeleccionado] = useState(null);

  useEffect(() => {
    const libro = libros.find((x) => (x.id === Number(id)));
    if(libro){
    setLibroSeleccionado(libro);
    }else{
      throw new Error ("No se encontro el libro deseado")
    }
  },[id]);

  return (
    <div>
      {librosSeleccionado != null ? (
        <div>
          <h4>{librosSeleccionado.nombre}</h4>
          <div>{librosSeleccionado.img}</div>
          <p>{librosSeleccionado.precio}</p>
        </div>
      ) : null}
    </div>
  );
}

export default DetalleLibros;
