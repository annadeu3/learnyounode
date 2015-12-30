var numArray = process.argv.slice(2);
function sum(numArray) {
	var sumNum = 0;
	for (var i = 0; i < numArray.length; i++) {
		sumNum += Number(numArray[i]);
	}
	console.log(sumNum);
}
sum(numArray)

/* var result = 0
for (var i=2; i < process.argv.length; i++)
result += Number(process.argv[i])
console.log(result)
*/
