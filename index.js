const startStrapi = require("strapi");

const serverless = require("serverless-http");

const strapiInstance = startStrapi();

let strapiStartPromise = null;

module.exports.handler = async (event, context) => {
  console.log("test")
  // if (strapiStartPromise === null) {
  //   strapiStartPromise = strapiInstance.start();
  // }
  // await strapiStartPromise;
  // const handler = serverless(strapiInstance.app);
  // return handler(event, context);
};