import React, { createContext, useReducer } from 'react';
import ArticleReduce from './ArticleReduce';

// Initial state
const initialState = {
  articles: [],
  article:null
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ArticleReduce, initialState);

  // Actions
  const getArticles = async (id) => {
    try {
        fetch('data.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(data) {
              dispatch({
                type: 'GET_ARTICLES',
                payload: data.articles.sort((a,b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
              });

            console.log(data);
          });
      } catch (err) {
       console.log("Error", err)
      }
  
  }
  function getArticleBySlug(slug) {

    dispatch({
      type: 'GET_ARTICLE',
      payload: state.articles.filter(article => article.slug === slug)
    });
  }
  function getMostUpvoted() {
    // articles.sort((a,b) => {
    //     return a.upvotes - b.upvotes;
    // })
    dispatch({
      type: 'GET_MOST_UPVOTED',
      payload: state.articles.sort((a,b) => b.upvotes - a.upvotes)
    });
  }
  function getMostRecent() {
    dispatch({
      type: 'GET_MOST_RECENT',
      payload: state.articles.sort((a,b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    });
  }

  return (<GlobalContext.Provider value={{
    articles: state.articles,
    article: state.article,
    getArticles,
    getArticleBySlug,
    getMostUpvoted,
    getMostRecent
  }}>
    {children}
  </GlobalContext.Provider>);
}