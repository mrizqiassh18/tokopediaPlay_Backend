import VideoThumbnail from '../models/videoModels.js';  // Pastikan nama berkas dan model sesuai
import ProductList from '../models/productModels.js';
import Comments from '../models/commentsModels.js';

export const getVideo = async (req, res) => {
    try {
        const videos = await VideoThumbnail.find();  // Menggunakan model VideoThumbnail
        res.json(videos);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const getVideoById = async (req, res) => {
    try {
        const videoId = req.params.videoId;

        const video = await VideoThumbnail.findById(videoId);
        if (!video) {
            return res.status(404).json({ message: 'Video not found' });
        }

        const productList = await ProductList.find({ videoId: videoId });
        const comment = await Comments.find({ videoId: videoId });

        res.json({ video, productList, comment });
        
    } catch (error) {
        console.error('Error fetching video by ID:', error);
        res.status(500).json({ error: 'Error fetching video by ID' });
    }
}
