"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const cors_1 = __importDefault(require("cors"));
const node_dns_1 = __importDefault(require("node:dns"));
const node_path_1 = __importDefault(require("node:path"));
node_dns_1.default.setServers(["1.1.1.1", "8.8.8.8"]);
const app = (0, express_1.default)();
app.use(express_1.default.static(node_path_1.default.join(__dirname, "public")));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", UserRoutes_1.default);
app.get("/", (req, res) => {
    res.send("Hello, world!xxxx");
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
