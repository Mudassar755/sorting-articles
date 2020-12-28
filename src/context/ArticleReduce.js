export default (state, action) => {
    switch(action.type) {
      case 'GET_ARTICLES':
        return {
          ...state,
          articles: action.payload
        }
      case 'GET_ARTICLE':
        return {
          ...state,
          article: action.payload[0]
        }
      case 'GET_MOST_UPVOTED':
        return {
          ...state,
          articles: action.payload
        }
      case 'GET_MOST_RECENT':
        return {
          ...state,
          articles: action.payload
        }
      default:
        return state;
    }
  }