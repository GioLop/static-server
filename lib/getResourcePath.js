const path = require('node:path');

const publicFolderPath = './public';

function getResourcePath(req) {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}/`);
  
  let pathname = `${parsedUrl.pathname}`;
  const ext = path.parse(pathname).ext;
  
  if (!ext) {
    if (pathname === '/') {
      pathname = `${publicFolderPath}${pathname}index.html`;
    } else {
      pathname = `${publicFolderPath}${pathname}.html`;
    }
  } else {
    pathname = `${publicFolderPath}${pathname}`;
  }

  return {
    pathname,
    ext
  };
}

module.exports = getResourcePath;