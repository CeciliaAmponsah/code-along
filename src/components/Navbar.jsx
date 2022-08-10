import React from "react";
import NavItem from "./NavItem";

function NavItem({ menu }) {
  return (
    <nav>
      <nav className="flex justify-betweeen px-5 py-20 shadow-md">
        <h3 className="font-bold">Pizza Joint</h3>
        <ul className="flex gap-5">
          <NavItem manu="Home" />
          <NavItem manu="Products" />
          <NavItem manu="Services" />
          <NavItem manu="About" />
          <NavItem manu="Contact" />
        </ul>
      </nav>
    </nav>
  );
}

export default NavItem;
