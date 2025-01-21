import React from 'react';
import './card.css';


const Card = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No news data available.</p>; // Display a fallback message
  }

  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className="cardContainer">
      {data.map((curItem, index) => {
        if (!curItem.urlToImage) {
          return null; // Skip articles without images
        } else {
          return (
            <div className="card" key={index}>
              <img src={curItem.urlToImage} alt="news" />
              <div className="content">
                <a
                  className="title"
                  onClick={() => readMore(curItem.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {curItem.title}
                </a>
                <p>{curItem.description}</p>
                <button onClick={() => readMore(curItem.url)}>Read More</button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Card;
