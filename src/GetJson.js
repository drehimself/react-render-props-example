import React, { Component } from 'react';
import axios from 'axios';

class GetJson extends Component {
    state = {
      response: []
    }

  componentDidMount() {
    axios.get(this.props.endpoint)
      .then(response => {
        this.setState({ response: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return this.props.children({
      response: this.state.response
    });
  }
}

export default GetJson;
