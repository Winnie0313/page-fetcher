// takes two command line arguments: a URL and a local file path
// downloads the resource at the URL to the local path on your machine
// Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

const request = require('request');
const fs = require('fs');


const url = process.argv[2];
const localFilePath = process.argv[3];

// make an http request and wait for the response.
// After the http request is complete, take the data you receive and write it to a file in your local filesystem.

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  // download the body/HTML to the file with the local file path
  fs.writeFile(localFilePath, body, err => {
    if (err) {
      console.error(err);
    }
  });

  // find the fileSzie
  const fileSize = body.length;
  console.log(`Downloaded and saves ${fileSize} bytes to ${localFilePath}`)
  });

