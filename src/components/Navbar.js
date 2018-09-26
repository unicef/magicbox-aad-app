import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ isLoggedIn = false, logout }) =>
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/seekret">Map</Link>
            </li>


        {!isLoggedIn &&

                <li>
                    <Link to="/login">Login</Link>
                </li>
            }

        {isLoggedIn &&

                <li>
                    <a href="" role="button" onClick={() => logout()}>
                        Logout
                    </a>
                </li>
}
                    </ul>
    </div>

export default Navbar
