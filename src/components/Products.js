import { Link, Outlet } from "react-router-dom"
export const Products = () =>{
    return(
        <div>
            <nav>
                <Link to="feature">Feature</Link>
                <Link to="new">New</Link>
            </nav>
            <Outlet/>
        </div>
    )
}