import mongoose from "mongoose"

let usersSchema = new mongoose.Schema({
    userName : {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true
    }
})

let usersModel = mongoose.model("Udmin", usersSchema, "users");

export default usersModel