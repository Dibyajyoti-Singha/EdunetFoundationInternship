const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

const app = express();
const PORT = 5005;

//  Middleware
app.use(express.json());

//  Root Route
app.get('/', (req, res) => {
    res.send('Server is running successfully!');
});

//  Registration Route
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.json({ message: "User Registered" });
        console.log("User Registration Completed");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//  Login Route 
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        res.json({ message: "Login Successful", user: { username: user.username, email: user.email } });
        console.log("User Login Successful");
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//  Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log("DB connection error:", err));

//  Start Server AFTER Routes
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
