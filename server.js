const express = require('express')
const app = express();
const path = require('path');
//const port = 3000
app.use(express.static(__dirname+ '/dist'));
//

app.listen(process.env.PORT || 8080);
app.get('/*', (req, res) => {
    req.sendFile(path.join(__dirname + '/dist/index.html'));
});
console.log('Litsening')