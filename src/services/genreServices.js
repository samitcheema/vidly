import http from "./httpServices";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/genres";

export function getGenres() {
  return http.get(apiEndpoint);
}
