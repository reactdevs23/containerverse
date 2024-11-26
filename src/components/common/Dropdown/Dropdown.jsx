import { useRef } from "react";
import clsx from "clsx";

import classes from "./Dropdown.module.css";

import useOnClickOutside from "../../../hooks";
import { Text } from "..";

const Dropdown = ({
  children,
  isActive,
  items,
  selectedValue,
  onSelect,
  setIsActive,
  className,
  sm,
}) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setIsActive(false));
  return (
    <div
      className={clsx(
        classes.dropdown,
        classes.noTheme,
        className,
        sm && classes.sm
      )}
      ref={ref}
    >
      {children}
      <div className={clsx(classes.dropdownMain, isActive && classes.active)}>
        <div className={clsx(classes.list, "overflow")}>
          {items?.map((item, idx) => {
            return (
              <div
                key={idx}
                onClick={() => {
                  onSelect(item);
                  setIsActive(false);
                }}
              >
                <Text
                  key={"id-" + idx}
                  className={clsx(
                    classes.listItem,
                    selectedValue === item && classes.active
                  )}
                >
                  {item}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
