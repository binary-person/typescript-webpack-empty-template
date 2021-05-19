import path = require('path');
import express = require('express');

const port = parseInt(process.env.PORT || '') || 8080;

const app = express();
// note that this will be lib/public with webpack.min.js already there when this gets compiled and run
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Typescript webpack empty template running on port ' + port));
