import { Link, NavLink } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div>
            <h3>Navbar</h3>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/users">Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;