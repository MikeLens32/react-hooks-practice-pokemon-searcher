import React from "react";

function Search({ term, onChangeTerm }) {

  function handleChange(e) {
    onChangeTerm(e.target.value)
  }


  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt" 
        value={term}
        onChange={handleChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
