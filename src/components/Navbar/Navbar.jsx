import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { logo } from "../../images";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { Button } from "../common";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Navbar = ({ isAuthenticated }) => {
  const [sidebar, setSidebar] = useState(false);
  const navItems = [
    {
      navItem: "Home",
      to: "/",
    },
    {
      navItem: "Sales",
      to: "/sales",
    },
    {
      navItem: "Dashboard",
      to: "/dashboard",
    },
  ];
  return (
    <header className={classes.wrapper}>
      <div className={clsx(classes.header, "container")}>
        <img src={logo} alt="Logo" className={classes.logo} />
        <nav className={clsx(classes.navItems, sidebar && classes.sidebar)}>
          {isAuthenticated &&
            navItems.map(({ navItem, to }, i) => (
              <NavLink
                to={to}
                key={i}
                className={({ isActive }) =>
                  isActive ? clsx(classes.navItem, "textBg") : classes.navItem
                }
              >
                {navItem}
              </NavLink>
            ))}
          <div className={classes.buttonContainer}>
            <Button transparent className={classes.button}>
              Sign Up
            </Button>
            <Button className={classes.button}>Log In</Button>
          </div>
        </nav>
        <div className={classes.mobileButton}>
          {sidebar ? (
            <MdClose
              className={classes.closeIcon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          ) : (
            <FaBars
              className={classes.hamburger}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
