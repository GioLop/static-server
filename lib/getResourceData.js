const fs = require('node:fs');

function getResourceData(resourcePath) {
  try {
    const resourceData = fs.readFileSync(resourcePath);
    return resourceData;
  } catch (error) {
    throw new Error(`Error getting the file: ${err}`);
  }
}

module.exports = getResourceData;