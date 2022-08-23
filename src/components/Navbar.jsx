import React from "react";
import NavItem from "./NavItem";

const links = [
  {
    label: "Home",
    to: "/home",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Contact",
    to: "/contact",
  },
  {
    label: "Products",
    to: "/products",
  },
  {
    label: "Task Manager",
    to: "/task-manager",
  },

]

function Navbar() {
  return (
      <nav className="flex justify-between px-20 py-5 shadow-md">
        <h3 className="font-bold">Pizza Joint</h3>
        <ul className="flex gap-5">
          {links.map((link, index) => (
            <NavItem key={index} label={link.label} to={link.to} />
          ))}
        </ul>
      </nav>
  );
}

export default Navbar;
