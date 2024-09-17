const fs = require('node:fs');

function validateResource(resourcePath) {
  const fileExists = fs.existsSync(resourcePath);
  
  if (!fileExists) {
    throw new Error(`File ${resourcePath} not found`);
  }
}

module.exports = validateResource;