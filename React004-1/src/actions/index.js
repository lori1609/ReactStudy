import React from 'react';
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

// export default () => {
//   return <div> List of Blogs </div>;
//

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=1234567890zaqwsxcderfv';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/post${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
