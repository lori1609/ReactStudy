import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { Router, browserHistory} from 'react-router';

//htttp:www.blog.com/post/5 - browserHistory
//htttp:www.blog.com/#post/5 - hasHistory
//

//Don't need the line anymore, will render App in a seperated
// location. So comments here, import Router, browserHistory
// import App from './components/app';
import reducers from './reducers';

import routes from './routes';

import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
