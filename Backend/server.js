import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import config from './config/env.js';
import authRouter from './routes/authRoutes.js';
import { protect, admin } from './middlewares/auth.js';  


const app = express();

// Middleware
app.use(cors({
  origin: config.frontendUrl,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

connectDB();

app.use('/api/auth', authRouter);

app.use('/api/protected-route', protect, (req, res) => {
  res.json({ success: true, message: 'Access granted', user: req.user });
});


const PORT = config.port || 5000;
app.listen(PORT, () => 
  console.log(`Server running in ${config.nodeEnv} mode on port ${PORT}`)
);