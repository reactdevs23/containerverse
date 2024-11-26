import React, { useState } from "react";
import classes from "./SalesPage.module.css";
import AllContainers from "components/Sales/AllContainers/AllContainers";
import { containerImg } from "../../images";
import ContainerInfo from "../../components/Sales/ContainerInfo/ContainerInfo";
import clsx from "clsx";

const SalesPage = () => {
  const allContainers = [
    {
      id: 1,
      images: [containerImg, containerImg, containerImg, containerImg],
      name: "Container Name",
      price: "$350.00",
      info: "This unique shipping container is securely tokenized on the blockchain, providing transparent and verifiable ownership.",
    },
    {
      id: 2,
      images: [containerImg, containerImg, containerImg, containerImg],
      name: "Container Name",
    },
    {
      id: 3,
      images: [containerImg, containerImg, containerImg, containerImg],
      name: "Container Name",
    },
    {
      id: 4,
      images: [containerImg, containerImg, containerImg, containerImg],
      name: "Container Name",
    },
    {
      id: 5,
      images: [containerImg, containerImg, containerImg, containerImg],
      name: "Container Name",
    },
    {
      id: 6,
      images: [containerImg, containerImg, containerImg, containerImg],
      name: "Container Name",
    },
    {
      id: 7,
      images: [containerImg, containerImg, containerImg, containerImg],
      name: "Container Name",
    },
    {
      id: 8,
      images: [containerImg, containerImg, containerImg, containerImg],
      name: "Container Name",
    },
  ];
  const [selectedContainers, setSelectedContainers] = useState([]);

  return (
    <main className={clsx(classes.wrapper, "container")}>
      <AllContainers
        allContainers={allContainers}
        selectedContainers={selectedContainers}
        setSelectedContainers={setSelectedContainers}
      />
      <ContainerInfo selectedContainers={selectedContainers} />
    </main>
  );
};

export default SalesPage;
