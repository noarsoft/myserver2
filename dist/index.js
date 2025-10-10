"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
// import userRoutes from "./UserRoutes";
const path = require("path");
const app = Express();
app.use(Express.static(path.join(__dirname, 'public')));
const mongoURI = "mongodb+srv://iampop242_db_user:test1234@cluster0.fbcapr5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose_1.default.connect(mongoURI).then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
app.use(Express.json());
app.use((0, cors_1.default)());
const port = 3000;
// app.use("/api", userRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!hjhgjhgjhgj");
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
