const CustomAPIError = require("./custom-error");
const BadRequest = require("./bad-request");
const UnauthenticatedError = require("./unauthenticated");
//EXPORT ALL ERROR HANDLERS AS ONE OBJECT
module.exports = {
  CustomAPIError,
  BadRequest,
  UnauthenticatedError,
};
