// Exercise 2.2 - Greeting
// ----------------------

// require the 'request-promise' module.
const request = require("request-promise");

const greeting = (langCode) => {
  return request(`https://journeyedu.herokuapp.com/hello/${langCode}`)
    .then((response) => {
      const data = JSON.parse(response);
      return data;
    })
    .then((parsedResponse) => {
      return parsedResponse.data;
    })
    .catch((err) => console.log("Error: ", err));
};

// Testing
greeting("da").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }

// 3
