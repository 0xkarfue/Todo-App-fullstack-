import express from 'express';
import connectDB from "./db/db.js";
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
})

const app = express();

connectDB().then(() => {

    app.listen(process.env.PORT, () => {
        console.log('server is running.......');
    })
}
).catch((error) => {

    console.log(`ERROR !!! `, error)
}

)


