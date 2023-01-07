const axios = require("axios");

const uri = "http://api.quotable.io/random?minLength=180&maxLength=190";

module.exports = function getData() {
  return axios.get(uri).then((response) => response.data.content.split(" "));
};
