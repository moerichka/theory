import React from "react";

import s from "./Card.module.css";

function Card({ image, title, price, size }) {
  // large medium small
  // const person = {
  //   name: "John"
  // }

  // person.name
  // person["name"]

  const names = ["John", "Marry", "Doe"];
  // span className="name"

  return (
    <div className={`${s.card} ${s.dark} ${s[size]}`}>
      <div className={s.imageWrapper}>
        <img src={image} alt="" />
      </div>
      <div className={s.content}>
        <div className={s.title}>{title}</div>
        <div className={s.price}>{price}</div>
      </div>
    </div>
  );
}

export default Card;
