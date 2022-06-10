const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();
app.use(express.json());
dotenv.config();

const  userRoutes  = require('./routes/userRoutes');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");


app.get("/", (req,res) => {
    res.send("API is running...")
});

app.get("/api/notes",(req,res) => {
    res.json(notes);
});

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
connectDB();

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`Server started on ${PORT}`));

