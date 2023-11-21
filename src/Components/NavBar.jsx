import { Link } from "react-router-dom"


function NavBar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Inico soy un link</Link></li>
        <li><Link to="/nosotros">Nosotros tambien</Link></li>
        <li><Link to="/contacto">Contacto exacto</Link></li>
      </ul>
    </div>
  )
}

export default NavBar
