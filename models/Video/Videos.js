import mongoose from "mongoose"

let videosSchema = new mongoose.Schema({
    
    videoName: {
        type: String,
        required: true,
    },
    videoLength: {
        type: String,
        required: true,
    },
    playlist:{
        type: String,
        required: true,
    },
    videoCreater:{
        type: String,
        required: true,
    },
     videoCategiory:{
        type: String,
        required: true,
     }
})

let videosModel = mongoose.model("Videos", videosSchema, "videos");

export default videosModel