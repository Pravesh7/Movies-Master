import {
  SEARCH_MOVIE,
  FETCH_MOVIES,
  FETCH_MOVIE,
  LOADING,
  ISLOGGED,
  ADD_MOVIE,
} from "../actions/types";

const initialState = {
  text: "",
  movies: [],
  loading: false,
  movie: [],
  isLogged: false,
  playlist: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false,
      };
    case FETCH_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        loading: false,
      };
    case FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ISLOGGED:
      return {
        ...state,
        isLogged: action.payload,
      };
    case ADD_MOVIE:
      return {
        ...state,
        playlist: action.payload,
      };
    default:
      return state;
  }
}
