const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  //ensures  auth header is valid
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Invalid credentials");
  }

  // Separates token from the rest of the string
  const token = authHeader.split(" ")[1];

  //verify header and pass
  try {
    const decoded = jwt.verify(token, process.env.SECRET);

    const { id, username } = decoded;
    //set up user property
    req.user = { id, username };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Not authorized to access this route");
  }
};

module.exports = authenticationMiddleware;
