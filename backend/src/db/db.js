import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
 

// const DB_NAME = "todoApp";

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGODB connected !! DB: HOST ${connectionInstance.connection.host}`);
        console.log(`MONGODB connected !! DB: HOST ${connectionInstance}`);
        
    } catch (error) {
        console.log('ERROR : ', error);
        process.exit(1)
    }
};

export default connectDB;