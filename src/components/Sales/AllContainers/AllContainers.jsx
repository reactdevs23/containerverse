import React, { useRef, useState } from "react";
import classes from "./AllContainers.module.css";
import { filterIcon } from "../../../images";
import { Checkbox, Text } from "../../common";
import clsx from "clsx";
import {
  TbLayoutSidebarRightExpandFilled,
  TbLayoutSidebarRightCollapseFilled,
} from "react-icons/tb";
import useOnClickOutside from "../../../hooks";
import Dropdown from "../../common/Dropdown/Dropdown";
const dropdownItems = [
  "Avaiable Containers",
  "Container1",
  "Container2",
  "Container3",
];
const AllContainers = ({
  allContainers,
  selectedContainers,
  setSelectedContainers,
}) => {
  const [sidebar, setSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterBy, setFilterBy] = useState("Avaiable Containers");
  const handleCheckboxChange = (container) => {
    setSelectedContainers((prevSelected) => {
      const isSelected = prevSelected.some((item) => item.id === container.id);
      return isSelected
        ? prevSelected.filter((item) => item.id !== container.id) // Remove if unchecked
        : [...prevSelected, container]; // Add if checked
    });
  };

  //close on outside click
  const sidebarRef = useRef(null); // Ref for the sidebar

  useOnClickOutside(sidebarRef, () => setSidebar(false));
  return (
    <>
      <div
        className={clsx(classes.wrapper, sidebar && classes.sidebar)}
        ref={sidebarRef}
      >
        <div className={classes.header}>
          <Text lg medium>
            Filter by <span className="textBg">{filterBy}</span>
          </Text>

          <Dropdown
            isActive={showDropdown}
            setIsActive={setShowDropdown}
            onSelect={(val) => setFilterBy(val)}
            selectedValue={filterBy}
            items={dropdownItems}
          >
            {" "}
            <button onClick={() => setShowDropdown((prev) => !prev)}>
              <img src={filterIcon} alt="Icon" className={classes.filterIcon} />
            </button>
          </Dropdown>
        </div>
        <div className={clsx(classes.allContainer, "overflow")}>
          {allContainers.map((container) => (
            <div
              className={clsx(
                classes.container,
                selectedContainers.some((item) => item.id === container.id) &&
                  classes.selected
              )}
              key={container.id}
            >
              <Checkbox
                className={classes.checkbox}
                checked={selectedContainers.some(
                  (item) => item.id === container.id
                )}
                setChecked={() => handleCheckboxChange(container)}
              />
              <div className={classes.containerDetails}>
                <div className={classes.imgContainer}>
                  <img src={container.images[0]} alt="ContainerImg" />
                </div>
                <div className={classes.nameAndId}>
                  <Text className={classes.label}>Container</Text>
                  <Text lg medium>
                    Id# <span>{container.id}</span>{" "}
                    <span className={classes.divider}>|</span>{" "}
                    <br className={classes.br} />
                    <span>{container.name}</span>
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {sidebar ? (
        <TbLayoutSidebarRightExpandFilled
          onClick={() => setSidebar((prev) => !prev)}
          className={classes.sidebarIcon}
        />
      ) : (
        <TbLayoutSidebarRightCollapseFilled
          onClick={() => setSidebar((prev) => !prev)}
          className={classes.sidebarIcon}
        />
      )}
    </>
  );
};

export default AllContainers;
