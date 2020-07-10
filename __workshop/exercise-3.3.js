// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require("opencage-api-client");
require("dotenv").config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${lat},${lng}`,
  };
  console.log(requestObj.q);
  return opencage
    .geocode(requestObj)
    .then((data) => {
      const address = data.results[0].formatted;
      return address;
    })
    .catch((error) => {
      console.log("error", error.message);
    });
}

getAddressFromPosition("12.8584", "1.2945").then((response) =>
  console.log(response)
);
