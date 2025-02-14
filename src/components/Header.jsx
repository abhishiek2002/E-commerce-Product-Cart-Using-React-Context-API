import React from "react";
import { Link, NavLink } from "react-router";
import logo from "/lotusLogo.png";
import { useCardContext } from "../contexts/CardContext";

const Header = () => {
    const {item, setItem} = useCardContext();
  return (
    <header className="flex w-screen justify-between px-6 py-4 shadow-sm shadow-white sticky top-0 mb-5">
      {/* logo */}
      <div>
        <Link to={"/"}>
          <img src={logo} alt="" className="max-w-11 drop-shadow-sm" />
        </Link>
      </div>

      {/* cart btn */}
      <div className="relative">
        <NavLink to={"/cart"}>🛒 Cart <span className="absolute bottom-1/2 left-full rounded-full bg-orange-700 px-1 flex items-center justify-center w-5 h-5">{item.length}</span></NavLink>
      </div>
    </header>
  );
};

export default Header;
