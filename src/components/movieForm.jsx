import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class MovieForm extends Component {
  state = {
    data: {
      title: "",
      genre: "",
      Stock: "",
      Rate: ""
    },
    errors: {}
  };

  render() {
    return (
      <div>
        <h1>Movie Form{match.params.id} </h1>
        <button className="btn-primary" onClick={() => history.push("/movies")}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
