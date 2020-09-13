import React from "react";
import "./App.css";
import Search from "./search";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <Search />
     <footer> Created with a tutorial on <a href='https://scrimba.com/'>Scrimba</a></footer>
    </div>
  );
}

export default App;
