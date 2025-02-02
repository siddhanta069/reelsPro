import mongoose , { Schema, models, model } from 'mongoose';

export const VIDEO_DIMENSIONS = {
    width: 1080,
    height: 1920
} as const

export interface Ivideo {
    _id: mongoose.Types.ObjectId,
    title: string,
    description: string,
    videoUrl: string,
    thumbnailUrl: string,
    controls?: boolean,
    transformations?: {
        width: number,
        height: number,
        quality?: number
    }

}

const videoSchema = new Schema<Ivideo> ({
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoUrl: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    controls: { type: Boolean, default: true},
    transformations: {
        width: { type: Number, default: VIDEO_DIMENSIONS.width },
        height: { type: Number, default: VIDEO_DIMENSIONS.height },
        quality: { type: Number, default: 100 }
    }
}, { timestamps: true });

const Video = models?.Video || model<Ivideo>('Video', videoSchema);

export default Video;