if (process.env.NODE_ENV === "production") {
  // we are n production return prod set of keys
  module.exports = require("./prod");
} else {
  // we are in developement return dev keys
  module.exports = require("./dev");
}
