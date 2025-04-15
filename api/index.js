// api/index.js
const serverless = require("serverless-http");
const app = require("../src/app"); // adjust if your file is not exactly there

module.exports = app;
module.exports.handler = serverless(app);
