import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";
import { ImSpinner } from "react-icons/im";

const Button = ({
  children,
  onClick,
  href,
  transparent,
  btnPrimary,

  wFull,
  className,
  to,
  loading,
  xl,
  icon,
  disabled,

  ...rest
}) => {
  return (
    <>
      {onClick ? (
        <button
          {...rest}
          className={clsx(
            className,
            classes.button,
            xl && classes.xl,
            transparent && classes.transparent,

            btnPrimary && classes.btnPrimary,

            wFull && classes.wFull,
            loading && classes.loading
          )}
          onClick={onClick}
          disabled={loading}
        >
          {icon && icon}
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </button>
      ) : href ? (
        <a
          {...rest}
          className={clsx(
            className,
            classes.button,
            xl && classes.xl,
            transparent && classes.transparent,

            btnPrimary && classes.btnPrimary,

            wFull && classes.wFull,
            loading && classes.loading
          )}
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          {icon && icon}
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </a>
      ) : to ? (
        <Link
          {...rest}
          className={clsx(
            className,
            classes.button,
            xl && classes.xl,
            transparent && classes.transparent,

            btnPrimary && classes.btnPrimary,

            wFull && classes.wFull,
            loading && classes.loading
          )}
          to={to}
        >
          {" "}
          {icon && icon}
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </Link>
      ) : (
        <button
          {...rest}
          className={clsx(
            className,
            classes.button,
            xl && classes.xl,
            transparent && classes.transparent,

            btnPrimary && classes.btnPrimary,

            wFull && classes.wFull,
            loading && classes.loading
          )}
        >
          {" "}
          {icon && icon}
          {loading ? (
            <>
              {children} <ImSpinner className={classes.spinner} />
            </>
          ) : (
            children
          )}
        </button>
      )}
    </>
  );
};

export default Button;
