var fs = require('fs');

var SAMPLES_PATH = path.join(__dirname, 'samples');
var PARSED_PATH = path.join(__dirname, 'samples-parsed');

module.exports.samples = fs.readdirSync(SAMPLES_PATH).map(function (filePath) {
  var mson = fs.readFileSync(path.join(SAMPLES_PATH, filePath), 'utf8');
  var structures = JSON.parse(
    fs.readFileSync(
      path.join(PARSED_PATH, filePath.replace('.md', '.json')), 'utf8'
    )
  );

  // We *exclude* the header so the MSON is easier to use in places like
  // e.g. API Blueprint `+ Attributes` sections, which you can build up
  // via the `sample.type` and `sample.mson`.
  if (mson[0] === '#') {
    mson = mson.split('\n').slice(1).join('\n');
  }

  return {
    name: filePath,
    code: mson, // For backward-compatibility
    mson: mson,
    type: structures[0].element,
    refract: structures[0],
    dataStructures: structures
  };
});
