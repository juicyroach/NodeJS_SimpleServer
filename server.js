var http = require("http");
var url = require("url");

function start(route) {
	function onRequest(request, response) {
		var pathName = url.parse(request.url).pathname;
		console.log("Request from " + pathName + " received");

		route(pathName);

		response.writeHead(200, {
			"Content-Type": "text/plain"
		});
		response.write("Hello world!");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server Start!");
}

exports.start = start;