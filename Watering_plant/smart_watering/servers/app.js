/*
Name: Saed Hassuna | ID: 213521099
Name: Mohammad AlaaElden | ID: 214082893
*/

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const HTTP_PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const webRoutes = require("./routes/web.routes");
const espRoutes = require("./routes/esp.routes");

// Routes separation (as required)
app.use("/esp", espRoutes);
app.use("/api", webRoutes);

// Optional backward compatibility (if your client uses /tree)
app.use("/tree", webRoutes);

app.get("/health", (req, res) => {
    res.json({
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date()
    });
});


process.on("SIGINT", () => {
    console.log("Shutting down server...");
    process.exit(0);
});


app.listen(HTTP_PORT, () => {
    console.log(`Server running on: http://localhost:${HTTP_PORT}`);
});
