// Exercise 2.3 - Use the error
// ----------------------------
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

    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    });
};

// Testing
greeting("jp").then((result) => console.log(result)); // { lang: "French", code: "FR", text: "Bonjour" }
