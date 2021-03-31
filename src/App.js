import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Users from './components/Users'
import Posts from './components/Posts'
import Comments from './components/Comments'
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/calendar">
      <div className="App">
        <div className="w-100 bg-dark header">header</div>
        <div className="w-100 bg-light text-left p-1 logo ">

          <div className="d-flex m-2">
            <i class="fas fa-swatchbook fa-3x align-self-center"></i>
            <div className="">
              <span className="font-weight-bold greenText">Solve IT</span><br />
              <span className="font-weight-bold">Book</span>
            </div>
          </div>
        </div>
      </div>

      <Switch>

        <Route exact path="/">
          <Users />
        </Route>
        <Route path="/posts:id">
          <Posts />
        </Route>
        <Route path="/comments">
          <Comments />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
