import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    text: { type: String, required: true },
    role: { type: String, required: true },
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);
export default Message;