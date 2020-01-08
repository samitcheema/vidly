import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Favorite from "./common/favorite";
import Genres from "./common/genres";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class Movie extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDecrement = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleFavorite = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].favorited = !movies[index].favorited;
    this.setState({ movies });
  };
  handleGenreSelect = () => {};

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no more movies in the database</p>;

    const { pageSize, currentPage, movies: allMovies } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <Genres
            items={this.state.genres}
            textProperty="name"
            valueProperty="_id"
          />
        </div>
        <div className="col">
          <p>{this.state.movies.length} movies in the database.</p>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rental Rate</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Favorite
                      favorited={movie.favorited}
                      onClick={() => this.handleFavorite(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDecrement(movie)}
                      type="button"
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
export default Movie;
