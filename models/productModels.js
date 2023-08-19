import mongoose from "mongoose";
import VideoThumbnail from "./videoModels.js";

const product_list = new mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: VideoThumbnail, // Nama model yang benar
        required: true
    },
    link_product: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    product_img: {
        type: String,
        required: true
    }
});

const ProductList = mongoose.model('product_list', product_list);

export default ProductList;