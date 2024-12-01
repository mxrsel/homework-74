import express from "express";
import { promises as fs } from "fs";
import { Message } from "../types";

const messagesRequestsRouter = express.Router();
const path = './messages';

messagesRequestsRouter.get("/", async (req, res) => {
    try {
        const files = await fs.readdir(path);
        const messages: Message[] = [];

        files.forEach((file) => {
            const filePath = `${path}/${file}`;
              fs.readFile(filePath, "utf-8")
                  .then((content) => {
                const message: Message = JSON.parse(content);
                messages.push(message);
            });
        });

        files.reverse();

        res.send(messages).req.body;
    } catch (e) {
        console.error(e);
    }
});

messagesRequestsRouter.get("/:id", async (req, res) => {

});

messagesRequestsRouter.post("/", async (req, res) => {

});

export default messagesRequestsRouter;
