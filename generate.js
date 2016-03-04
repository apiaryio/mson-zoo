var drafter = require('drafter.js');
var fs = require('fs');
var path = require('path');

var SAMPLES_PATH = path.join(__dirname, 'samples');
var PARSED_PATH = path.join(__dirname, 'samples-parsed');

fs.readdirSync(SAMPLES_PATH).map(function (filePath) {
  var mson = fs.readFileSync(path.join(SAMPLES_PATH, filePath), 'utf8');
  var apib = '# My API\n# Data Structures\n';
  if (mson[0] !== '#') {
    apib += '# Example\n';
  }
  apib += mson;

  console.log('Processing ' + filePath);
  var result = drafter.parseSync(apib);
  var structures = result.content[0].content[0].content.map(function (struct) {
    return struct.content[0];
  });

  fs.writeFileSync(
    path.join(PARSED_PATH, filePath.replace('.md', '.json')),
    JSON.stringify(structures, null, 2) + '\n',
    'utf8'
  );
});
