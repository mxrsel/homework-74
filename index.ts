import express from 'express';
import messagesRequestsRouter from "./routers/messagesRequests";

const app = express();
const port = 8000;

app.use(express.json());
app.use('/messages', messagesRequestsRouter);

const run = async() => {

    app.listen(port, () => {
        console.log(`Server started on port: http://localhost:${port}`);
    })
}

run().catch(err => console.error(err))

