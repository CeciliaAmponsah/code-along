import React from "react";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <nav>
      <nav className="flex justify-betweeen px-5 py-20 shadow-md">
        <h3 className="font-bold">Pizza Joint</h3>
        <ul className="flex gap-5">
          <NavItem menu="Home" />
          <NavItem menu="Products" />
          <NavItem menu="Services" />
          <NavItem menu="About" />
          <NavItem menu="Contact" />
        </ul>
      </nav>
    </nav>
  );
}

export default Navbar;
