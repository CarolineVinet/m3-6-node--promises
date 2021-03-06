// Exercise 2.1 - Testing
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const testGreeting = () => {
  return request("https://journeyedu.herokuapp.com/hello") // 1
    .then((response) => {
      const data = JSON.parse(response);
      return data; // 2
    })
    .then((parsedResponse) => {
      console.log(parsedResponse);
      return parsedResponse.data.text; // 3
    })
    .catch((err) => console.log("Error: ", err));
};

testGreeting().then((result) => console.log(result));
