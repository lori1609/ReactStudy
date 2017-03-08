import React from 'react';
import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

// export default () => {
//   return <div> List of Blogs </div>;
//

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=1234567890zaqwsxcderfv';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(props){
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`, props);
  console.log("createPost action is called");
  return {
    type: CREATE_POST,
    payload: request
  }
}
