

function Navbar() {

  return (
    <nav>
        <img src={require("../assets/nav-logo.png")} alt="Little Lemon logo" className="nav-image">
        </img>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
        </ul>
    </nav>
  );
}

export default  Navbar;