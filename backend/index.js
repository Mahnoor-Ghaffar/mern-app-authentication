// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import {connectDB} from './config/db.js';
// import userRoute from "./routes/user.route.js";
// import cookieParser from "cookie-parser";

// dotenv.config();

// const app = express();

// app.use(cors({
  // origin: process.env.FRONTEND_URL,
  // credentials: true,
  // allowedHeaders: ["Content-Type", "Authorization"],
  // methods: ["GET", "POST", "PUT", "DELETE"],
// }));

// app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));


// const PORT = process.env.PORT || 8080;

// app.use("/api/v1/user", userRoute);

// app.get("/home",(_,res)=> {
//     res.status(200).json({
//         success:true,
//         message:"Hello i am comming from backend"
//     })
// })

// connectDB().then(() => {
//   app.listen(PORT, () => {
//     console.log("Connected to DB");
//     console.log("Server is running on port " + PORT);
//   });
// });



import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import {connectDB} from "./config/db.js";
import userRoute from "./routes/user.route.js";
// import courseRoute from "./routes/course.route.js";
// import mediaRoute from "./routes/media.route.js";
// import purchaseRoute from "./routes/purchaseCourse.route.js";
// import courseProgressRoute from "./routes/courseProgress.route.js";

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 8080;

// default middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  // origin: process.env.FRONTEND_URL,
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
 
// apis
// app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/user", userRoute);
// app.use("/api/v1/course", courseRoute);
// app.use("/api/v1/purchase", purchaseRoute);
// app.use("/api/v1/progress", courseProgressRoute);

"http://localhost:8080/api/v1/user/register"

// app.get("/home",(_,res)=> {
//     res.status(200).json({
//         success:true,
//         message:"Hello i am comming from backend"
//     })
// })

 
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})

