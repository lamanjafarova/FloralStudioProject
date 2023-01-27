import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.scss"

const Header = () => {
  return (
    <div id='header'>
        <div className="headers">
            <div className="logo">
                <h1>Florial Studio</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/add-product"}>
                            Add Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/wish-list"}>
                           Wish List
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
  )
}

export default Header