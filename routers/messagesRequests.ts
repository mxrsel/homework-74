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
    try {
        const datetime = new Date().toISOString();
        const id = datetime;
        const fileName = `${id}.txt`;
        const filePath = `${path}/${fileName}`;

        const data: Message = {
            id,
            message: req.body.message,
            datetime: datetime
        };
        await fs.writeFile(filePath, JSON.stringify(data));
        res.send(data);
    } catch (e) {
        console.error(e);
    }
});

export default messagesRequestsRouter;
