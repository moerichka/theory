import React from "react";

import Card from "./components/Card";
import Button from "./components/Button/Button";
import Counter from "./components/Counter";
import PostCreator from "./components/PostCreator";

import image1 from "./assets/images/image1.jpg";

import "./styles/index.css";

function App() {
  const cards = [
    { id: 0, image: image1, title: "some item", price: 250 },
    { id: 1, image: image1, title: "some item2", price: 230 },
    { id: 2, image: image1, title: "some item3", price: 150 },
    { id: 3, image: image1, title: "some item4", price: 550 },
    { id: 4, image: image1, title: "some item5", price: 2560 },
    { id: 5, image: image1, title: "some item6", price: 50 },
  ];

  return (
    <>
      <PostCreator />
      <Counter />
      <Button>
        <div className="buttonContent">
          <div className="icon">icon</div>
          <div className="buttonText">Click me</div>
        </div>
      </Button>
      <div className="list">
        {cards.map((card) => (
          <Card
            image={card.image}
            title={card.title}
            price={card.price}
            key={card.id}
            size="large"
          />
        ))}
      </div>
    </>
  );
}

export default App;
