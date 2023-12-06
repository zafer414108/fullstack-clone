import { Schema } from "mongoose";

const gigSchema = new Schema ({
    userId: {
        type: Schema.ObjectId,
        ref: 'User',
        required: [true, 'User Id can not be null']
    },
    title: {
        type: String,
        required: [true, 'Title can not be null']
    },
    desc: {
        type: String,
        required: [true, 'Description can not be null']
    },
    avgRating: {
        type: Number,
        min:1,
        max:5,
       default: 0
    },
    totalRatings: {
        type: Number,
       default: 0
    },
    category: {
        type: String,
        required: [true, 'Category can not be null']
    },
    cover: {
        type: String
    },
    Images: {
        type: [String]
    },
    price: {
        type: Number,
        required: [true, 'Price can not be null']
    },
    shortTitle: {
        type: String,
        required: [true, 'Short Title can not be null']
    },
    shortDesc: {
        type: String,
        required: [true, 'Short description can not be null']
    },
    revisionNumber: {
        type:Number,
        required: true,
    },
    features: {
        type: [String],
        required: false
    },
    sales : {
        type: Number,
        default: 0
    }


},
{timestamps: true}
);

//creating model

export default mongoose.model('Gig', gigSchema);