import mongoose, { Schema } from "mongoose";

const userSchema = new Schema ({
    username: {
        type: String,
        required: [true, 'Username can not be null'],
        unique: [true, 'A user exists with this username']
    },
    email: {
        type: String,
        required: [true, 'Email can not be null'] ,
        unique: [true, 'A user exists with this email'],       
    },
    password: {
        type: String,
        required:[true, 'Password can not be null'],
    },
    img: {
        type:String,
        //required: [true, 'Image can not be null']
    },
    phone: {
        type: String,
        
    },
    country: {
        type: String,
        required: [true, 'Country can not be null']
    },
    phone: {
        type: String,
        required: false
    },
    desc: {
        type: String,
        required: false
    },
    isSeller: {
        type: Boolean,
        default: false,
    }
},
{timestamps: true}
);

//creating model

export default mongoose.model('User', userSchema);