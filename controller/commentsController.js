import Comments from '../models/commentsModels.js';

export const saveComment = async (req, res) => {
    try {
        const videoId = req.params.videoId; // Mengambil ID video dari parameter URL
        const { username, comment } = req.body; // Mengambil username dan komentar dari body permintaan

        // Membuat dokumen komentar baru
        const newComment = new Comments({
            videoId: videoId,
            username: username,
            comment: comment
        });

        // Menyimpan dokumen komentar ke database
        const savedComment = await newComment.save();

        res.json(savedComment);
    } catch (error) {
        console.error('Error saving comment:', error);
        res.status(500).json({ error: 'Error saving comment' });
    }
}