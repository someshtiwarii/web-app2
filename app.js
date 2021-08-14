import React from "react";
import "./styles.css";
import { useState } from "react";

const foodDB = {
  northindian: [
    {
      name: "Chole Bhatoore",
      description:
        "It is a combination of chana masala and bhatura/puri, a fried bread made from maida.",
      rating: "5/5"
    },
    {
      name: "Palak Paneer",
      description:
        "Palak paneer is a vegetarian dish, consisting of paneer in a thick paste made from puréed spinach. ",
      rating: "5/5"
    },
    {
      name: "Samosa",
      description:
        "A samosa is a South Asian fried or baked pastry with a savory filling like spiced potatoes, onions, peas, etc. in a triangular shape. ",
      rating: "5/5"
    }
  ],

  southindian: [
    {
      name: "Vada",
      description:
        "Vada or bada is a category of savoury fried snacks from India. ",
      rating: "5/5"
    },
    {
      name: "Pongal",
      description: "Pongal or Huggi is a popular South Indian rice dish. ",
      rating: "4.5/5"
    },
    {
      name: "Masala Dosa",
      description:
        "Masala dosa is a popular South Indian dosa, which is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar.",
      rating: "5/5"
    }
  ],
  chinese: [
    {
      name: "Dumplings",
      description:
        "Dumpling is a broad class of dishes that consist of pieces of dough wrapped around a filling, or of dough with no filling.  ",
      rating: "3.5/5"
    },
    {
      name: "Chow Mein",
      description: "Chow mein are Chinese stir-fried noodles with vegetables ",
      rating: "3/5"
    },
    {
      name: "Fried Rice",
      description:
        "Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients. ",
      rating: "5/5"
    }
  ],
  mexican: [
    {
      name: "Tacos",
      description:
        "A taco is a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.  ",
      rating: "5/5"
    },
    {
      name: "Quesadillas",
      description:
        "A quesadilla is a Mexican and American dish consisting of a tortilla that is filled primarily with cheese. ",
      rating: "4.5/5"
    },
    {
      name: "Elote",
      description:
        "It is a culinary term used for a cooked ear of freshly picked maize from a cultivar of sweet corn. ",
      rating: "4/5"
    }
  ],
  american: [
    {
      name: "Macaroni and cheese",
      description:
        "It is a dish of cooked macaroni pasta and a cheese sauce, most commonly cheddar.",
      rating: "4.5/5"
    },
    {
      name: "Cheeseburger",
      description: "A cheeseburger is a hamburger topped with cheese. ",
      rating: "5/5"
    },
    {
      name: "Chicago Pizza",
      description:
        "It referred to simply as deep dish pizza due to its cooking style. ",
      rating: "5/5"
    }
  ],
  italian: [
    {
      name: "Neapolitan Pizza",
      description:
        "It is known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese ",
      rating: "6/5"
    },
    {
      name: "Lasagna",
      description:
        "It is an Italian dish made of stacked layers of thin flat pasta alternating with fillings such as ragù and other vegetables, cheese, and seasonings and spice. ",
      rating: "4.5/5"
    },
    {
      name: "Gelato",
      description:
        "Gelato is a frozen dessert of Italian origin. It is made with a base of 3.25% butterfat whole milk and sugar. ",
      rating: "5/5"
    }
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
                margin: "1rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {food.name} </div>
              <div style={{ fontSize: "large" }}> {food.description}</div>
              <div style={{ fontSize: "smaller" }}> {food.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
