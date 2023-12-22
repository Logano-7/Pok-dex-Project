import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <h1>
          <NavLink to="/">PokeDex</NavLink>
        </h1>
      <ul
        className="NavBar"
      >
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
