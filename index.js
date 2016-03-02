var fs = require('fs');

var SAMPLES_FOLDER_PATH = __dirname + '/samples';

module.exports.samples = fs.readdirSync(SAMPLES_FOLDER_PATH).map(function(filePath) {
  return {
    name: filePath,
    code: fs.readFileSync(SAMPLES_FOLDER_PATH+ '/' + filePath, {encoding: 'utf8'}),
  };
});
