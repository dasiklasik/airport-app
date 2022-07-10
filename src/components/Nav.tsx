import React from "react";
import {NavLink} from "react-router-dom";


export const Nav = () => {
    return (
        <nav className="flex justify-between px-5 h-[50px] bg-gray-200 items-center shadow-md">
            <NavLink to={'/'}>Airport</NavLink>
            <NavLink to={'/auth'}>Auth</NavLink>
        </nav>
    );
}