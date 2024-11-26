import React, { useState } from "react";
import classes from "./SelectedContainerImg.module.css";

const SelectedContainerImg = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className={classes.imageContainer}>
      <img src={images[currentImg]} alt="#" className={classes.mainImg} />
      <div className={classes.otherImages}>
        {images.slice(0, 3).map((img, i) => (
          <img
            key={i}
            src={img}
            alt="#"
            className={classes.smallImg}
            onClick={() => setCurrentImg(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedContainerImg;
