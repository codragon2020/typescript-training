"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var loginRoutes_1 = require("./routes/loginRoutes");
var cookie_session_1 = __importDefault(require("cookie-session"));
// import bodyParser from 'body-parser'
var app = express_1.default();
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['laskdjf'] }));
app.use(loginRoutes_1.router);
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
