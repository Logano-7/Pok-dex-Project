import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyle: "none",
          padding: "1rem",
        }}
      >
        <li>
          <NavLink to="/">PokeDex</NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/library">Library</NavLink>
        </li>
        <li>
          <NavLink to="/compare">Compare</NavLink>
        </li>
        <li>
          <NavLink to="/credits">Credits</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
