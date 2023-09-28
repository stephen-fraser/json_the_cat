// pair coded with github.com/cknowles90 

const fetchBreedDescription = require('./breedFetcher')

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {

  if (error) {
    console.error("Error fetch details: ", error);
  } else {
    console.log(description);
  }
});
