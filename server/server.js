import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { router as api } from "./routes/api.js";

const app = express();
const port = "3000";

app.use(bodyParser.json());
app.use(cors());
app.use(api);

app.listen(port, () => console.log("server active"));