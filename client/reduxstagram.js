// let's go!
import React, { Component } from 'react';
import { render } from 'react-dom';
//import CSS
import css from './styles/style.styl';
//import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
//import React-Router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store'; //default export, store, named export, history, use curly brackets for history.
//import Sentry
import Raven from 'raven-js';
import { sentry_url } from './data/config';
//lesson 17
Raven.config(sentry_url).install();
Raven.captureMessage('Something Bad Happened!');
//Raven.showReportDialog();//Dope - input module appears for user feedback when error occurs.

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute> {/*If the path = / then the component for the index route will be displayed -- depending on the URL structure*/}
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
