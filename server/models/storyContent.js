import mongoose from "mongoose";

// Define the story schema
const storySchema = mongoose.Schema({
    caption: { type: String, required: true },
    username: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String, required: true },
    tags:String,
    likes: { type: [String] ,default: [] },
    postDate: { type: Date, default: new Date() },
});

// Export the Story model based on the schema
export default mongoose.model("Story", storySchema);
