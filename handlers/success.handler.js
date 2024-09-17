const contentMap = require("../lib/contentMap");

function successHandler(res, resourceData, ext) {
  res.setHeader('Content-Type', contentMap[ext || '.html'] || 'text/plain');
  res.end(resourceData);
}

module.exports = successHandler;