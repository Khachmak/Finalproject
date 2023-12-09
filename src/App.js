import './App.css';
import React, { useState } from "react";
import { trainingsData } from "./trainingsData";
import TrainingsList from "./trainingsList";
import Filter from "./Filter";

function App() {
  const [trainings, setTrainings] = useState([]);
  const [filters, setFilters] = useState({ rank: "", location: "" });
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);

  const handleSearch = () => {
    const filteredTrainings = trainingsData.filter((training) => {
      return (
        (filters.rank === "" || training.recommendedRanks.includes(filters.rank)) &&
        (filters.location === "" || training.location === filters.location)
      );
    });
    setTrainings(filteredTrainings);
    setIsSearchPerformed(true);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Welcome to Excellency Academy</h1>
      </header>
      {!isRegistrationFormOpen && (
        <Filter setFilters={setFilters} onSearch={handleSearch} />
      )}
      {isSearchPerformed && (
        <TrainingsList 
          trainings={trainings} 
          setIsRegistrationFormOpen={setIsRegistrationFormOpen} 
        />
      )}
    </div>
  );
}

export default App;

