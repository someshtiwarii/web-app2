import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  northindian: [
    { name: "Chole Bhatoore", rating: "5/5" },
    { name: "Palak Paneer", rating: "5/5" }
  ],

  southindian: [
    { name: "Vada", rating: "5/5" },
    { name: "Pongal", rating: "4.5/5" }
  ],
  chinese: [
    {
      name: "Dumplings",
      rating: "3.5/5"
    },
    {
      name: "Chow Mein",
      rating: "3/5"
    }
  ],
  mexican: [
    { name: "Tacos", rating: "5/5" },
    { name: "Quesadillas", rating: "4.5/5" }
  ],
  american: [
    { name: "Macaroni and cheese", rating: "4.5/5" },
    { name: "cheeseburger", rating: "5/5" },
    { name: "Chicago Pizza", rating: "5/5" }
  ],
  italian: [
    { name: "Neapolitan Pizza", rating: "6/5" },
    { name: "Lasagna", rating: "4.5/5" },
    { name: "Gelato", rating: "5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("chinese");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        {" "}
        🍕 good<span style={{ color: "#1D4ED8" }}>Food</span> 🍱
      </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite food. Select a cuisine to get started{" "}
      </p>

      <div>
        {Object.keys(foodDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#818CF8",
              borderRadius: "1rem",
              padding: "0.5rem  1rem",
              margin: "1rem 0.3rem",
              border: "none",
              color: "white",
              fontSize: "16px"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {foodDB[selectedGenre].map((food) => (
            <li
              key={food.name}
              style={{
                textAlign: "center",
                listStyle: "none",
                padding: "10px",
                border: "1px solid #1D4ED8",
                width: "50%",
                margin: "auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
