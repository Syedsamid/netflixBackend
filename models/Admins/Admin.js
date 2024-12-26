import mongoose from "mongoose"

let adminSchema = new mongoose.Schema({
    adminname : {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

let adminModel = mongoose.model("Admin", adminSchema, "admins");

export default adminModel