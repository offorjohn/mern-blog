import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
            
        },
        content: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
            unique: true,
        },
        image: {
            type: String,
            default: 'https://cdn.pixabay.com/photo/2017/02/23/13/05/avatar-2092113_640.png',

        },
        category: {
            type: String,
            default: 'uncategorized',
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },

    }, { timestamps: true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;