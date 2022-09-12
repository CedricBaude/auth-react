import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { Link } from "react-router-dom";

const Navbar = () => {

    const { toggleModals } = useContext(UserContext);
    return (
        <nav className="navbar navbar-light bg-light px-4">
            <Link to="/" className="navbar-brand">
                AuthJS
            </Link>
            <button
                onClick={() => toggleModals("signUp")}
                className="btn btn-primary">
                Sign Up
            </button>
            <button
                onClick={() => toggleModals("signIn")}
                className="btn btn-primary ms-2">
                Sign In
            </button>
            <button

                className="btn btn-danger ms-2">
                Logout
            </button>
        </nav>
    );
};

export default Navbar;