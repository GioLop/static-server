const validateResource = require('../lib/validateResource');
const getResourcePath = require('../lib/getResourcePath');
const getResourceData = require('../lib/getResourceData');
const successHandler = require('../handlers/success.handler');
const errorHandler = require('../handlers/error.handler');

function httpListener(req, res) {
  const { pathname, ext } = getResourcePath(req);
 
  try {
    validateResource(pathname);
  } catch (error) {
    console.log(error);
    return errorHandler(res, 400, error);
  }

  try {
    const resourceData = getResourceData(pathname);
    return successHandler(res, resourceData, ext);
  } catch (error) {
    console.log(error);
    return errorHandler(res, 500, error);
  }
}

module.exports = httpListener;