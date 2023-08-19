import express from "express";
import {
    getVideo,
    getVideoById
} from "../controller/videoController.js";

import { saveComment } from "../controller/commentsController.js";

const router = express.Router();

router.get('/videos', getVideo);
router.get('/videos/:videoId', getVideoById);
router.post('/videos/:videoId/comments', saveComment);

export default router;