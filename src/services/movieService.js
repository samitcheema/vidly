import http from "./httpServices";

const apiEndpoint = "http://localhost:3900/api/movies";

function movieUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    http.put(movieUrl(movie._id), body);
  }
}

export function deleteMovie(movieId) {
  http.delete(apiEndpoint + "/" + movieId);
}
