import React from "react";
import "./styles.css";
import { useState } from "react";

const movies = {
  Horror: [
    { Name: "Conjuring 1", Rating: "9/10" },
    { Name: "Horror Story", Rating: "8.3/10" },
    { Name: "Annabelle", Rating: "6.7/10" },
    { Name: "Lights Out", Rating: "8.5/10" },
    { Name: "The Shining", Rating: "8.7/10" },
    { Name: "The Nun", Rating: "7.1/10" },
    { Name: "IT", Rating: "8/10" }
    // { Name: "Lights Out", Rating: "3.5/5" },
  ],
  Thriller: [
    { Name: "Hush", Rating: "8/10" },
    { Name: "Shutter Island", Rating: "7.5/10" },
    { Name: "US", Rating: "9/10" },
    { Name: "Parasite", Rating: "8.1/10" },
    { Name: "Inception", Rating: "8/10" },
    { Name: "Dhrishyam", Rating: "9.2/10" }
  ],
  Animated: [
    { Name: "Moana", Rating: "8/10" },
    { Name: "Frozen", Rating: "8/10" },
    { Name: "Coco", Rating: "9.5/10" },
    { Name: "Despicable Me", Rating: "8.5/10" },
    { Name: "The Grinch", Rating: "9/10" },
    { Name: "The Boss Baby", Rating: "8.4/10" },
    { Name: "Hotel Transylvania", Rating: "8.2/10" }
  ]
};

export default function App() {
  const [getGenre, setGenre] = useState("Horror");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎬Movies Recommendations</h1>

      <h3>Select which genre you wanna choose from list</h3>
      <div>
        {Object.keys(movies).map((genre) => (
          <button className="btn" onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <div className="all-items">
        <ul>
          {movies[getGenre].map((book) => (
            <li key={book.Name} className="lists">
              <div className="name"> {book.Name} </div>
              <div className="rating"> {book.Rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
