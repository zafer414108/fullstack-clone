import userModel from "../models/user.model.js";
import User from "../models/user.model.js"
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

// Create New Account
const register = async(req ,res, next) => {
    try {
        //Password Hashing and Salting
        const hashedPassword = bcrypt.hashSync(req.body.password, 13);

        //create new user
        const newUser = new User({...req.body,password: hashedPassword, });

        console.log(req.body);

        //save new user
        await newUser.save();

        res.status(200).json({
            message: 'New User is created',
            newUser,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//User Login
const login = async(req ,res, next) => {
    try {
        // Find user by email
        const existingUser = await User.findOne({
           email:req.body.email
        });
//if user doesn't exist send error message

if(!existingUser) {
    return res.status(404).json({
        message: 'User not Found, Please check your login credentials..',
    });

}

//if user exists, control password 

const isPassTrue = bcrypt.compareSync(
    req.body.password,
    existingUser.password
)

//if password is false return error

if(!isPassTrue) {
    return res.status(401).json({
        message: 'An Error occured. Login failed. Please check your login credentials..',
    });
}

 // if password is correct, create jwt token

const token = jwt.sign({
    id: existingUser._id,
    isSeller: existingUser.isSeller,
},
process.env.JWT_SECRET
);


existingUser.password="*****";


        res.cookie('accesssToken', token, {
            httpOnly: true,
        })
        .status(200)
        .json({
            message: 'Login is successful',
            user: existingUser,
        });
    } catch (error) {
        res.status(401).json({
            message: "Login attempt failed...",
            error: error.message
        });
    }
};

//User Logout
const logout = () => {};
 
export {
    register,
    login,
    logout,
  };