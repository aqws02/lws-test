//index.js
exports.add = function (a, b) {
	return a + b;
}

exports.app = function (a, b) {
	console.log(a, b);
	return a + b;
}

exports.alert = function (a) {

	console.log(a);
}