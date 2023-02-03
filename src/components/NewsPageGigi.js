import React from 'react'
import {useState, useEffect} from 'react';
import axios, {isCancel, AxiosError} from 'axios';
import NewsCardGigi from './NewsCardGigi';


function NewsPageGigi() {

    // use state for articles with default value empty array
    const [articles, setArticles]=useState([]);
    // use state for loading state
    const[isLoading, setIsLoading]= useState(true);
    // state for total pages
    const [totalPages, setTotalPages]=useState(0);

    useEffect(() => {
 // here we fetch data from api
        setIsLoading(true);
      const fetchData = async () => {
    try {
       const {data} = await axios.get('https://hn.algolia.com/api/v1/search?query=javascript&tags=story');
       const {hits, nbPages} = data;
       setArticles(hits);
       setTotalPages(nbPages);
    } catch (err) {
    console.log(err);
    } finally{
        setIsLoading(false);
    }
         };
        fetchData();
    }, [])

  return (
    <div className='container'>
        <h1 className ='gigih1'>Latest Javascript news</h1>
        <div className='news-container'>
            {
                isLoading ? <h3>Loading ...</h3> : articles.map( article => <NewsCardGigi article ={article} key={article.objectID}/>)
            }
        </div>
        </div>
  )
}

export default NewsPageGigi