import { Link } from "react-router-dom";
import "../../App.css";

function Header() {
  return (
    <>
      <header>
        <img src="/img/banner.jpg" />
      </header>
      <nav id="menu1">
        <div>
          <a>
            <Link to={"/"}>Inicio</Link>
          </a>
        </div>
        <div>
          <a>
            <Link to={"/cursos"}>Cursos</Link>
          </a>
        </div>
        <div>
          <a>
            <Link to={"/libros"}>Libros</Link>
          </a>
        </div>
        <div>
          <a>
            <Link to={"/contactos"}>Contactos</Link>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Header;
