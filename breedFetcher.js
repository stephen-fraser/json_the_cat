// pair coded with github.com/cknowles90 

const request = require("request");

const fetchBreedDescription = (breedName, callback) => {
  const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(apiURL, (error, response, body) => {

    if (error) {
      callback(error);
      return;
    }

    if (response.statusCode !== 200) {
      console.error(`HTTP ERROR! status code: ${response.statusCode}`);
      return;
    }
    // method parses a JSON string into an object
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("Error: Breed not found");
      return;
    }
    const description = data[0].description;
    callback( null, description);
  });
};

module.exports = fetchBreedDescription;