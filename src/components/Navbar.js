import { Link } from "react-router-dom"

export const Navbar = () =>{
    return(
    <nav>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        <Link to="/users">Users</Link>
    </nav>
    )
}