"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', (req, res) => {
    res.send('Hello');
});
const server = app.listen(3000, () => {
    console.log('Server running at http://localhost:' + server.address().port);
});
//# sourceMappingURL=app.js.map