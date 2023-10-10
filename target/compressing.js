// Import necessary modules
const zlib = require('zlib');
const fs = require('fs');

// Define the file paths
const sourceFilePath = '/path/to/source/file';
const compressedFilePath = '/path/to/compressed/file';

// Read the source file
const sourceFile = fs.readFileSync(sourceFilePath);

// Compress the source file
zlib.deflate(sourceFile, (err, compressedData) => {
  if (err) {
    console.error(err);
  } else {
    // Write the compressed data to a file
    fs.writeFile(compressedFilePath, compressedData, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('File compressed successfully!');
      }
    });
  }
});
