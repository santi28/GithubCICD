"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send(`
    <h1>Typescript Node Starter</h1>
    <p>Try to find this <a href="/secret">secret</a></p>
  `);
});
app.get('/secret', (req, res) => {
    res.send(`
    <h1>Secret</h1>
    ${process.env.APP_SECRET ?
        `<p>The app secret is ${process.env.APP_SECRET}</p>` :
        `<p>The app secret is not set</p>`}
  `);
});
app.listen(3000, () => {
    console.log('server started');
});
