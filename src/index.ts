import express from "express";
import { router } from "./modules/user/userRoute.js";

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
    res.send("Hello World");
});
server.use("/user", router);

server.listen(3333, () => {
    console.log("Servidor na porta 3333");
});
