import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const menu =
        <>
            <li className="btn btn-ghost text-xl"> <Link to='/'>Home</Link> </li>
            <li className="btn btn-ghost text-xl"> <Link to='/blog'>Blog</Link> </li>
            <li className="btn btn-ghost text-xl"> <Link to='/about'>About</Link> </li>
            <li className="btn btn-ghost text-xl"><a href="https://drive.google.com/file/d/1V6IVr8TEpyQ1V1cJtNY3V6w6Bo03usKt/view?usp=share_link">Resume</a></li>
            
        </>
    return (
        <div className=" border-b" data-aos="fade-down"   >
            <div className="navbar bg-base-100 flex justify-between container mx-auto md:py-3">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">INDRAJIT</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex p-0">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;