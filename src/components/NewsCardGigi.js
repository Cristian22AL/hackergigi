import React from 'react'

function NewsCardGigi({article}) {
    //cred ca pot sa sterg
    if (!article.title) return null;
  return (
    <div className='news-card'>
        <h3>{article.title}</h3>
        <a href={article.url} target="_blank">Read the article</a>
        </div>
  )
}

export default NewsCardGigi;