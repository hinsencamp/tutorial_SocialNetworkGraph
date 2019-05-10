var fs = require("fs");

function writeToJSON(jsonData, title) {
  fs.writeFile(`./${title}.json`, JSON.stringify(jsonData), function(err) {
    if (err) {
      console.log(err);
    }
  });
}

module.exports = writeToJSON;
