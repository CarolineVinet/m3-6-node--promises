// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  myPromise1 = new Promise((resolve, reject) => {
    if (
      array.every((word) => {
        return typeof word === "string";
      })
    ) {
      const upperCaseArray = array.map((string) => {
        return string.toUpperCase();
      });
      resolve(upperCaseArray);
    } else {
      reject("this isnt working");
    }
  });
  return myPromise1;
};

const sortWords = (array) => {
  myPromise2 = new Promise((resolve, reject) => {
    const sortedArray = array.sort();
    resolve(sortedArray);
    reject("this didnt work");
  });
  return myPromise2;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
