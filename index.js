import cors from 'cors'
import chalk from 'chalk'
import express from 'express'
import { } from 'dotenv/config'
import mongoose from 'mongoose'
import userRouter from './routers/useRouter.js'

const app = express()
const port = process.env.PORT
const connect = chalk.green.bold
const mongodb_url = process.env.MONGODB_URL

app.use(cors())
app.use(express.json({ limit: '30mb', extends: true }))
app.use("/users", userRouter);

mongoose.connection.on("connected", () => {
    console.log(connect("MongoDB database connection successfully connected"));
});
mongoose.connect(mongodb_url,{
    useNewUrlParser: true,
        useUnifiedTopology: true,
}).then(() => app.listen(port, console.log(`http://localhost:${port}`)))
