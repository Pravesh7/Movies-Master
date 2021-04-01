import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING,ISLOGGED } from "./types";
import axios from "axios";

import { APIKey } from "../APIKey";

export const searchMovie = (text) => {
  return (dispatch) => {
    // Dispatching the action SEARCH_MOVIE and the data is set in payload
    dispatch({
      type: SEARCH_MOVIE,
      payload: text,
    });
  };
};

export const fetchMovies = (text) => (dispatch) => {
  console.log('search actions fetchMovies')
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
    .then((response) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: response.data.Search,
        
      });
    })
    .catch((err) => console.log(err));
};

export const fetchMovie = (id) => (dispatch) => {
  console.log('id',id);
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
    .then((response) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING,
  };
};

export const isLogged = (data) => {
  return {
    type: ISLOGGED,
    payload:data
  };
};
export const saveMyMovie = (data) =>(dispatch)=> {
  dispatch({
    type: FETCH_MOVIES,
    payload: data,
  });
};

