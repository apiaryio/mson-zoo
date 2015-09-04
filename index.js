var fs = require('fs')

module.exports.samples = fs.readdirSync(__dirname + '/samples').map(function(file){
	return fs.readFileSync(__dirname + '/samples/' + file, {encoding: 'utf8'});
});
