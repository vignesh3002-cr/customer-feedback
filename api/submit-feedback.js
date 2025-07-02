import mongoose from 'mongoose';
import Feedback from '../models/Feedback.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await mongoose.connect(process.env.MONGO_URI);
    const feedback = new Feedback(req.body);
    await feedback.save();
    return res.status(201).json({ message: 'Feedback submitted' });
  }
  res.status(405).end(); // Method Not Allowed
}
