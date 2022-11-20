let isRaining = true;

const weather = new Promise((resolve, reject) => {
  if (!isRaining) {
    resolve("The party will be in the park!");
  } else {
    reject("Oh no! The party will be in my apartment.");
  }
});

weather
  .then(fulfilled => {
    console.log(fulfilled);
  })
  .catch(error => {
    console.log(error);
  });