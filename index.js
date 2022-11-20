import express from "express"
import cors from "cors"
import ProductRoute from "./routes/ProductRoute.js";
import dotenv from "dotenv"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(process.env.APP_PORT, () => {
    console.log("Server up and running...");
});