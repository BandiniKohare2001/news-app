import React from "react";
import './NewsArticle.css'

export default function NewsArticle({author, title, description, url, urlToImage, publishesAt, content}){
    return(
        <>
       <div className='news-article-card'>
            <img src={urlToImage} alt='' className='news-article-img' />
            <h1 className="article-title">{title}</h1>
            <div className="article-info">
                <p className="article-author">{author}</p>
                <p className="article-publishat">{publishesAt}</p>

            </div>
            <p className="article-description">{description}</p>

            <a href={url} target="_blank"><button className="btn">Read more</button></a>
          </div>
        </>
    )
}