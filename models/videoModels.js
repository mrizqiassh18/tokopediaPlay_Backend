import mongoose from "mongoose";

const video_thumbnail = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
});

const VideoThumbnail = mongoose.model('video_thumbnail', video_thumbnail);
export default VideoThumbnail;