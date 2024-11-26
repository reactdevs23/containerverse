import React from "react";
import { Outlet } from "react-router-dom";

const SalesLayout = () => {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
};

export default SalesLayout;
