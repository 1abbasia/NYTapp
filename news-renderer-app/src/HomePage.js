import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {
  const [articles, setArticles] = useState([]);

  
 //This hook will fetch the proper data from the API
 //Using axios library to make HTTP reqest
  useEffect(() => {
    axios.get('https://api.nytimes.com/svc/topstories/v2/home.json', {
      params: {
        'api-key': 'EONiuNsRa4NOFxp79RzdMxuUjViPZ6YL'
      }
    })
    .then(response => {
      setArticles(response.data.results);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className='container'>
      <div className='header'>
        <h1>NY Times Top Stories</h1>
      </div>
      <div className='article-list'>
      {articles.map(article => (  //Loop over the articles object to get the divs that make up requested infromation
        <div className='article' key={article.url}>
          <h3>{article.title}</h3>
          <p>{article.abstract}</p>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default HomePage;
