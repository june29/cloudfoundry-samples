var app = require('express').createServer();
app.get('/', function(req, res){
    res.send('Hello, Node on Cloud Foundry!');
});
//app.listen(process.env.VMC_APP_PORT || 3000);
app.listen(process.env.VMC_APP_PORT || 3000);
