var fs = require('fs');

function numLines(file) {
	var sumLines = "";
	var buffer = fs.readFile(file, 'utf-8', function callback(err, data) {
		if (err) {
			console.log(err);
		} else {
			sumLines += data;
			console.log(sumLines.split("\n").length - 1);
		}
	});

}

numLines(process.argv[2]);