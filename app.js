import express from "express"
import config from "config"
import userRouter from "./controllers/admins/index.js"
import adminRouter from "./controllers/admins/index.js"
import videosRouter from "./controllers/videos/index.js"
import publicRouter from "./controllers/public/index.js"
import "./utils/dbconnect.js";

const app = express();
const PORT = config.get("PORT");

app.use(express.json());

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"hello samid"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.use("/api/public",publicRouter)


app.use("/api/users",userRouter)
// app.use("/api/admins",adminRouter)
app.use("/api/videos",videosRouter)


app.listen(PORT,()=>{
    console.log(`Server is running at PORT no ${PORT}`);
})