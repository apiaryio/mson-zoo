var fs = require('fs');
var path = require('path');

var SAMPLES_PATH = path.join(__dirname, 'samples');
var PARSED_PATH = path.join(__dirname, 'samples-parsed');

module.exports.samples = fs.readdirSync(SAMPLES_PATH).map(function (filePath) {
  var mson = fs.readFileSync(path.join(SAMPLES_PATH, filePath), 'utf8');

  var structures = JSON.parse(
    fs.readFileSync(
      path.join(PARSED_PATH, filePath.replace('.md', '.json')), 'utf8'
    )
  );

  return ({
    name: filePath,
    mson: mson,
    type: structures[0].element,
    refract: structures[0],
    dataStructures: structures
  });
});
