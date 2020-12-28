import {useEffect, useState} from 'react'
import './App.css';
import Articles from './components/articles/Articles';
import Article from './components/article/Article';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

function App() {

  return (
    <GlobalProvider>
    <Router>
      <Switch>
      <Route exact path="/" component={Articles} />
      <Route exact path="/articles/:slug" component={Article} />
      </Switch>
    </Router>
    </GlobalProvider>
  );
}

export default App;
