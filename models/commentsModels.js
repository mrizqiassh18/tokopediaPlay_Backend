import mongoose from "mongoose";
import VideoThumbnail from "./videoModels.js";

const comments = new mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'VideoThumbnail' , // Nama model yang benar
        required: true
    },
    username: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
});

const Comments = mongoose.model('Comments', comments);

export default Comments;