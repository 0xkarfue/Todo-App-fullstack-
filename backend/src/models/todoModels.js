import mongoose, { model } from "mongoose";

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    status: {
        status: Boolean,
    },
}, {timestamps: true});

export const Todo = mongoose.model("Todo", todoSchema);