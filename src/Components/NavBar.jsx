import { NavLink } from "react-router-dom";
import { routes } from "../helpers/routes";

function NavBar() {
  console.log(routes);
  return (
    <nav>
      <ul className="container d-flex gap-3 p-4">
         <NavLink to="/">Inicio</NavLink>
         <NavLink to="/nosotros">Nosotros</NavLink>
         <NavLink to="/contacto">Contacto</NavLink>
         <NavLink to="/registro">Registro</NavLink>
         <NavLink to="/login">Login</NavLink>

        {/* {routes.map(({ label, path }) => {
          <li>
            <NavLink to={path}>{label}</NavLink>
          </li>;
        })} */}
      </ul>
    </nav>
  );
}

export default NavBar;
