import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  return (
    <div>
      <div className="w-[90%] navbar bg-base-200 rounded-md fixed z-10">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">Muslin E-Store</Link>
        </div>
        <div className="flex-none">
          <div  className="dropdown dropdown-end">
            <Link to="/cart">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{cartItems.length}</span>
              </div>
            </label>
            </Link>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              
            </div>
          </div>

          <div className="dropdown dropdown-end font-bold">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-12 rounded-full">
                <img src="https://oliver-andersen.se/wp-content/uploads/2018/03/cropped-Profile-Picture-Round-Color.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                
                <Link className="justify-between" to="/profile">Profile
                  <span className="badge bg-sky-500">New</span></Link>
              </li>
             
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
