var fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', function callback(err, buffer) {
		if (err) throw err;
			console.log(buffer.split("\n").length - 1);
	});


