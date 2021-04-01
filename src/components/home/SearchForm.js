import React, { Component } from "react";
import { connect } from "react-redux";

import {
  searchMovie,
  fetchMovies,
  setLoading,
  saveMyMovie,
} from "../../actions/searchActions";

export class SearchForm extends Component {
  constructor(props){
   super(props);
   this.state={
    // Title="",
    // Year="",
    // Rating="",
    // Genre=""
  }
  }
  
  onChange = (e) => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };
  callMyMovieAction = () => {
    this.props.saveMyMovie([
      {
        Title: "RandomMovie",
        Year: "2021",
        imdbID: "8",
        Type: "customAdded",
        Poster: "",
      },
    ]);
  };

  render() {
    return (
      <div className="container jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
          {/*  Search  Movie  Form */}
          <form id="searchForm" onSubmit={this.onSubmit}>
          
            <input
              id="search"
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
        </div>

        {/* Add  Movie  Form */}
        <form id="addForm" onSubmit={this.callMyMovieAction}>
          <br />
          <label> Movie Title :</label>
          <input placeholder="Title" id="Title" type="text" value={this.state.Title}/>
          <br />
          <label> Movie Year :</label>
          <input placeholder="Year" id="Year" type="text" value={this.state.Year} />
          <br />
          <label> IMDB Score :</label>
          <input placeholder="Rating" id="Score" type="text" value={this.state.Rating}/>
          <br />
          <label>Movie Genre:</label>
          <input placeholder="Genre" id="Genre" type="text" value={this.state.Genre}/>
          <br />
          <button type="submit" className="btn btn-primary btn-bg mt-3">
            ADD Movie
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
  movies: state.movies.movies,
});

// redux store => props.text

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading, saveMyMovie }
)(SearchForm);
