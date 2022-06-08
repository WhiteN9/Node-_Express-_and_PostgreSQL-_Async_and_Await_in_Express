const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

// function getSlogan(request) {
//   generateSlogan(request).then((response) => {
//     console.log(`Your request was: ${request}`);
//     console.log(`Your slogan is: ${response.slogan}`);
//   });
// }

async function getSlogan(request) {
  const response = await generateSlogan(request);
  console.log(`Your request was: ${request}`);
  console.log(`Your slogan is: ${response.slogan}`);
}

async function fullSession(request) {
  const greeting = await generateMessage();
  console.log(greeting);
  await getSlogan(request);
  const leaving = await goodbye();
  console.log(leaving);
}

// function fullSession(request) {
//   generateMessage()
//     .then(console.log)
//     .then(() => getSlogan(request))
//     .then(() => goodbye())
//     .then(console.log);
// }

module.exports = { getSlogan, fullSession };
