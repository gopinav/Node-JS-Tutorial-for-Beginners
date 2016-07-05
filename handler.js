var querystring = require('querystring');

function home(response){
	console.log("Executing 'home' handler");
	var htmlfile = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />'+
'</head>'+
'<body>'+
'<form action="/review" method="post">'+
'<textarea name="text" rows="20" cols="60"></textarea>'+
'<input type="submit" value="Submit text" />'+
'</form>'+
'</body>'+
'</html>';
response.writeHead(200,{"Content-Type":"text/html"});
response.write(htmlfile);
response.end();
}
function review(response,reviewData){
	console.log("Executing 'review' handler");
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Your review is "+ querystring.parse(reviewData).text);
	response.end();
}
exports.home = home;
exports.review = review;
