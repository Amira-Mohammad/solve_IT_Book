import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Users } from './components/Users'
import { HelperContext, UserContext } from './components/HelperContext'
import Posts from './components/Posts'
import Comments from './components/Comments'
//import UserContext from './components/HelperContext'
import './App.css';

function App() {
  return (
    <HelperContext>
      <BrowserRouter basename="/solve_IT_Book">
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
          <Route path="/posts/:id">
            <Posts />
          </Route>
          <Route path="/comments/:id">
            <Comments />
          </Route>
        </Switch>
      </BrowserRouter>
    </HelperContext>
  );
}

export default App;
