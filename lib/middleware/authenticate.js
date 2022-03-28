const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  /*
    TODO: Check for the session cookie and verify
    its contents using jsonwebtoken, then
    assign the payload to req.user
  */
  try {
    const { parade } = req.cookies;
    const payload = jwt.verify(parade, process.env.JWT_SECRET);
    req.user = payload; 
    next();
  } catch (error) {
    error.message = 'You must be siged in to contine.';
    error.status = 401;
    next(error);
  }
};
