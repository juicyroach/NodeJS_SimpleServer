var http = require("http");

function start() {
	function onRequest(request, response) {
		console.log("Request receive");
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