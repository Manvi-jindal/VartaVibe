import React, { useState, useEffect } from 'react';
import './newsapp.css';
import Card from './Card'; // Import the Card component

const Newsapp = () => {
  const [search, setSearch] = useState(""); // Search bar starts empty
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "9c3ed8ee95884dec979460a60f96675b";

  // Function to fetch news data
  const getData = async (query = "India") => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();

      if (jsonData.articles && jsonData.articles.length > 0) {
        let dt = jsonData.articles.slice(0, 10); // Limit to the first 16 articles
        setNewsData(dt);
      } else {
        setNewsData([]);
        alert("No news found for the given search. Please enter a valid topic or keyword.");
      }
    } catch (error) {
      console.error("Error fetching news data:", error);
    }
  };

  useEffect(() => {
    getData(); // Fetch default news for "India" on component load
  }, []);

  // Handle search input changes
  const handleInput = (e) => {
    setSearch(e.target.value); // Update the search query
  };

  // Handle search button click
  const handleSearch = () => {
    const query = search.trim();
    if (query === "") {
      alert("Please enter a topic or keyword."); // Alert if the search input is empty
    } else {
      getData(query); // Fetch news based on search query
    }
  };

  // Clear the search input
  const clearSearch = () => {
    setSearch(""); // Clear the search input
  };

  // Handle category button click
  const handleCategoryClick = (category) => {
    getData(category); // Fetch news for the selected category
  };

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1 className="logo">Varta Vibe</h1>
        </div>
        <nav>
          <ul className="language-list">
            <li><a href="#">ENGLISH</a></li>
            <li><a href="#">HINDI</a></li>
            <li><a href="#">GUJARATI</a></li>
            <li><a href="#">TELUGU</a></li>
            <li><a href="#">TAMIL</a></li>
            <li><a href="#">MARATHI</a></li>
            <li><a href="#">URDU</a></li>
          </ul>
        </nav>
      </header>
      <nav className="navbar">
  <div className="menu">
    <div className="category-buttons">
      {/* Sports Dropdown */}
      <div className="dropdown">
        <button className="menu-btn">Sports &#9662;</button>
        <div className="dropdown-content">
          <button onClick={() => handleCategoryClick("Football")}>Football</button>
          <button onClick={() => handleCategoryClick("Cricket")}>Cricket</button>
          <button onClick={() => handleCategoryClick("Wrestling")}>Wrestling</button>
          <button onClick={() => handleCategoryClick("Hockey")}>Hockey</button>
        </div>
      </div>

      {/* Entertainment Dropdown */}
      <div className="dropdown">
        <button className="menu-btn">Entertainment &#9662;</button>
        <div className="dropdown-content">
          <button onClick={() => handleCategoryClick("Bollywood")}>Bollywood</button>
          <button onClick={() => handleCategoryClick("Hollywood")}>Hollywood</button>
        </div>
      </div>

      {/* Health Dropdown */}
      <div className="dropdown">
        <button className="menu-btn">Health &#9662;</button>
        <div className="dropdown-content">
          <button onClick={() => handleCategoryClick("General Health")}>General Health</button>
        </div>
      </div>

      {/* Fitness Dropdown */}
      <div className="dropdown">
        <button className="menu-btn">Fitness &#9662;</button>
        <div className="dropdown-content">
          <button onClick={() => handleCategoryClick("Fitness")}>Fitness</button>
        </div>
      </div>
    </div>
  </div>

  <div className="search-bar">
    <input
      type="text"
      className="search-input"
      placeholder="SEARCH NEWS"
      value={search}
      onChange={handleInput}
    />
    {search && (
      <button className="clear-btn" onClick={clearSearch}>
        &#10006; {/* Cross (erase) button */}
      </button>
    )}
    <button className="search-btn" onClick={handleSearch}>&#128269;</button>
  </div>
</nav>

      
      <div className="news-container">
        {newsData && newsData.length > 0 ? (
          <Card data={newsData} />
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default Newsapp;
