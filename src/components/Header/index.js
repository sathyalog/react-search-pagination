import React from "react";
import logo from "../../assets/sky-logo.jpg";

function Header() {
  return (
    <>
      <div className="text-center bg-sky-300">
        <img
          src={logo}
          className="relative top-8 md:left-32 sm:left-4 bg-white p-2 md:w-32 rounded-xl sm:w-20 border-2 border-sky-100"
          alt="logo"
        />
      </div>
    </>
  );
}

export default Header;