import React from "react";
import classes from "./Text.module.css";
import clsx from "clsx";

const Text = ({
  children,
  base0,
  base700,
  sm,
  lg,
  xl,
  xl4,
  light300,
  medium,
  semiBold,
  bold,
  font900,
  className,
}) => {
  return (
    <p
      className={clsx(
        classes.text,

        base0 && classes.base0,
        base700 && classes.base700,
        sm && classes.sm,
        lg && classes.lg,
        xl && classes.xl,
        xl4 && classes.xl4,
        light300 && classes.light300,
        medium && classes.medium,
        semiBold && classes.semiBold,
        bold && classes.bold,
        font900 && classes.font900,
        className
      )}
    >
      {children}
    </p>
  );
};

export default Text;
