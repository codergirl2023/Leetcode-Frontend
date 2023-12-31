"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const process_1 = __importDefault(require("process"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config({ path: './.env' });
const userServer_1 = __importDefault(require("./routes/userServer"));
const problemSetServer_1 = __importDefault(require("./routes/problemSetServer"));
const submissionsServer_1 = __importDefault(require("./routes/submissionsServer"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process_1.default.env.PORT;
app.use('/users', userServer_1.default);
app.use('/problemset', problemSetServer_1.default);
app.use('/submissions', submissionsServer_1.default);
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});
app.listen(port, () => {
    console.log('app is listening at ', port);
});
