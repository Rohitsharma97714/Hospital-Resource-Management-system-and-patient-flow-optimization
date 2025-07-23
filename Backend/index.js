import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';

import adminRouter from './routes/adminRoute.js';
import userRouter from './routes/userRoute.js';
import hospitalRouter from './routes/hospitalRoute.js';
import doctorRouter from './routes/doctorRoute.js';

// Load environment variables
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect DB and Cloudinary
connectDB();
connectCloudinary();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/admin', adminRouter);
app.use('/api/user', userRouter);
app.use('/api/hospital', hospitalRouter);
app.use('/api/doctor', doctorRouter);

// Default test route
app.get('/', (req, res) => {
  res.send('API is working');
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
