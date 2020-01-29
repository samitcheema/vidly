import http from "./httpServices";

const apiEndpoint = "http://localhost:3900/api/movies";

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(apiEndpoint + "/" + movieId);
}

export function saveMovie(movie) {}

export function deleteMovie(movieId) {
  http.delete(apiEndpoint + "/" + movieId);
}
