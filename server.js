var http = require('http');
var app = require('./config/express')();
const url =
'mongodb+srv://aplicacao:Gl291299@cluster0.f1vvk.mongodb.net/test?retryWrites=true&w=majority'
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server escutando na porta ' + app.get('port'));
});