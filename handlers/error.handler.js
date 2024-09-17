function errorHandler(res, statusCode, error) {
  res.statusCode = statusCode;
  res.end(error.message);
}

module.exports = errorHandler;