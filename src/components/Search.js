import React, { useState, useEffect } from "react";
import "./App.css";

const Search = ({ term, setTerm }) => {
  const [word, setWord] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    setTerm(word);
  };
  return (
    <div className="input-div mt-4">
      <form onSubmit={onFormSubmit}>
        <label>Search</label>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
