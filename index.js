var fs = require('fs');
var path = require('path');

var SAMPLES_PATH = path.join(__dirname, 'samples');
var PARSED_PATH = path.join(__dirname, 'samples-parsed');

module.exports.samples = fs.readdirSync(SAMPLES_PATH).map(function (fileName) {
  var filePath = path.join(SAMPLES_PATH, fileName);
  var fileContent = fs.readFileSync(filePath);

  var dataStructures = JSON.parse(
    fs.readFileSync(
      path.join(PARSED_PATH, fileName.replace('.md', '.json'))
    )
  );

  return {
    fileName: fileName,
    filePath: filePath,
    fileContent: fileContent,
    dataStructureType: dataStructures[0].element,
    dataStructureName: dataStructures[0].meta.id,
    dataStructure: dataStructures[0],
    dataStructures: dataStructures,
  };
});
