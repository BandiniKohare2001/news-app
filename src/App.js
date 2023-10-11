import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import NewsArticle from './component/NewsArticle/NewsArticle';

function App() {
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const loadNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=43fd698b64bc424cac307a2f81bc3664")
      setNews(response.data.articles)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadNews()
  }, [searchQuery])
  return (
    <>
      <div>
        <h1 className='heading'>News App</h1>
        <div className="input-div">
        <input className="input" type="text" value={searchQuery} onChange={(e) => {
          setSearchQuery(e.target.value)
        }} />
      </div>
        <div className='news-container'>
          {
            news.map((newsArticle, index) => {
              const { author, title, description, url, urlToImage, publishesAt, content } = newsArticle
              return (
                <NewsArticle
                  author={author}
                  title={title}
                  description={description}
                  url={url}
                  urlToImage={urlToImage}
                  publishesAt={publishesAt}
                  content={content}
                  key={index}
                />
              )
            })
          }
        </div>
      </div></>
  );
}

export default App;
