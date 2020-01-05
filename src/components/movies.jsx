import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Favorite from "./common/favorite";

class Movie extends Component {
  state = {
    movies: getMovies()
  };

  handleDecrement = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  h;
  handleFavorite = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].favorited = !movies[index].favorited;
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no more movies in the database</p>;

    return (
      <React.Fragment>
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
            {this.state.movies.map(movie => (
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
      </React.Fragment>
    );
  }
}
export default Movie;
