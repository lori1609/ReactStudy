import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

// const Greeting = () => {
//   return <div> Hey There </div>;
// };

export default(
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
    <Route path="posts/new" component={PostsNew} />
    <Route path="posts/:id" component={PostsShow} />
  </Route>
);

//posts/:id same as this.props.params.id

// <Route path="greet" component={Greeting} />
// <Route path="greet2" component={Greeting} />
// <Route path="greet3" component={Greeting} />
// /       App
// /greet
// /greet2
// /greet3
