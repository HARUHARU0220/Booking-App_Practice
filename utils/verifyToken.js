import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";


export const verifyToken = (req,res,next) => {
    const token = req.cookie.access_token;
    if (!token) {
        return next(createError(401, "You are not authenticated!"))
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"));
        req.user = user;
        next()
    });
};

export const veryfyUser = (req,res,next) => {
    verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403,"You are not authorized"));
        }
    })
};

export const veryfyAdmin = (req,res,next) => {
    verifyToken(req,res, ()=>{
        if(req.user.isAdmin) {
            next();
        } else {
            return next(createError(403,"You are not authorized"));
        }
    })
}