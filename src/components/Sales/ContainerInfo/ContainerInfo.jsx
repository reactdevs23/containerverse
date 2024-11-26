import React, { useState } from "react";
import classes from "./ContainerInfo.module.css";
import { Checkbox, Text, Button, Input } from "../../common";

import { FiMinus, FiPlus } from "react-icons/fi";
import { handleKeyDown } from "../../../hooks";
import SelectedContainerImg from "../SelectedContainerImg/SelectedContainerImg";
import clsx from "clsx";

const ContainerInfo = ({ selectedContainers }) => {
  const [agreeToS, setAgreeToS] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const pricePerContainer = selectedContainers.length
    ? parseFloat("350".replace("$", ""))
    : 0;

  const totalPrice = selectedContainers.length * pricePerContainer;
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handlePurchase = () => {
    if (!agreeToS) {
      alert("Please agree to the Terms and Conditions before proceeding.");
      return;
    }

    alert(`Successfully purchased ${quantity} container(s)!`);
  };

  if (selectedContainers.length === 0) {
    return (
      <div className={classes.nocontainer}>
        <Text xl>No containers selected.</Text>
      </div>
    );
  }
  return (
    <section className={clsx(classes.wrapper, "overflow")}>
      <div className={classes.images}>
        {selectedContainers?.map((container, i) => (
          <SelectedContainerImg key={i} images={container.images} />
        ))}
      </div>
      <div className={classes.infoWrapper}>
        <div className={classes.infoContainer}>
          <div className={classes.idAndName}>
            <Text xl semiBold>
              Id# 010
            </Text>{" "}
            <Text xl2 light300>
              Container Name
            </Text>
          </div>
          <Text font900 xl4 className={classes.price}>
            <span className="textBg">${totalPrice.toFixed(2)}</span>
          </Text>
          <Text light300>
            This unique shipping container is securely tokenized on the
            blockchain, providing transparent and verifiable ownership.
          </Text>
          <div className={classes.inputContainer}>
            <button onClick={incrementQuantity}>
              <FiPlus className={classes.icon} />
            </button>
            <Input
              value={quantity}
              setValue={setQuantity}
              onKeyDown={handleKeyDown}
              className={classes.input}
            />
            <button onClick={decrementQuantity}>
              <FiMinus className={classes.icon} />
            </button>
          </div>
          <Checkbox
            checked={agreeToS}
            setChecked={setAgreeToS}
            label="By proceeding with the purchase, I confirm that I agree to the Terms and Conditions."
          />
          <Button onClick={handlePurchase} xl>
            Purchase Container
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContainerInfo;
