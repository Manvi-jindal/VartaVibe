import React, { useState } from 'react';
import Card from './Card'

const Newsapp = () => {
  const [search, setSearch]=useState("india");
  const[newsData,setNewsData]=useState(null);
  const API_KEY="ac991adf65194703afa3d193dce01564";

  const getData = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
const handleinput = (e) =>{
  console.log(e.target.value);
  setSearch(e.target.value);
  

}
  
  return (
    <div>
      <nav>
        <div>
        <h1>Trendy News</h1>
        </div>
        <ul>
          <a>All news</a>
          <a>Trending</a>
        </ul>
        <div className='searchBar'>
          <input type='text' placeholder='search' onChange={handleinput}/>
          <button onClick={getData}>
            Search
          </button>

        </div>

      </nav>
      <div>
        <p className='head'>
          Stay updated with trendy app
        </p>
      </div>
      <div className='categoryBtn'>
        <button>Sports</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Politics</button>
        <button>Fitness</button>

      </div>
      <div>
        <Card data={newsData}/>
      </div>
    </div>
  )
}

export default Newsapp

