import React from "react";

function Filter({ setFilters, onSearch }) {
  const handleRankChange = (e) => {
    setFilters((filters) => ({ ...filters, rank: e.target.value }));
  };

  const handleLocationChange = (e) => {
    setFilters((filters) => ({ ...filters, location: e.target.value }));
  };

  const handleSearchClick = () => {
    onSearch(); 
  };

  return (
    <div className="filter-container">
      <label>
        Rank:
        <select onChange={handleRankChange}>
          <option value="">Select Rank</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </label>
      <label>
        Location:
        <select onChange={handleLocationChange}>
          <option value="">Select Location</option>
          <option value="Berlin">Berlin</option>
          <option value="Vienna">Vienna</option>
          <option value="Munich">Munich</option>
        </select>
      </label>
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default Filter;


