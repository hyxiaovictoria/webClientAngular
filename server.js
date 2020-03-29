const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/wbdv-sp20-xiaohai-client-angular'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/wbdv-sp20-xiaohai-client-angular/index.html'));
})

console.log('Console listening!');
