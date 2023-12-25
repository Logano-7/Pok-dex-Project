import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <ul
        className="NavBar"
      >
        <li className="logo">
          <NavLink to="/">PokeDex</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/library">Library</NavLink>
        </li>
        <li>
          <NavLink to="/credits">Credits</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
