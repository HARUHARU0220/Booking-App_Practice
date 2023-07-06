import express from "express"
import {updateUser, deleteUser, getUser, getUsers} from "../Controllers/users.js";
import {verifyToken, veryfyUser, veryfyAdmin} from "../utils/verifyToken.js";

const router = express.Router();


router.get("/checkauthentication",verifyToken, (req,res,next) =>{
    res.send("hello user, you are logged in")
})

router.get("/checkusers/:Id", veryfyUser, (req,res,next) =>{
    res.send("hello user, you are logged in and you can delete your account! ")
})

router.get("/checkadmin/:Id", veryfyAdmin, (req,res,next) =>{
    res.send("hello admin, you are logged in and you can delete all account! ")
})


//UPDATE
router.put("/:id", updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id",getUser);

//GET ALL
router.get("/", getUsers);


export default router