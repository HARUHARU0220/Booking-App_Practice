import express from "express"
import {register} from "../Controllers/auth.js"
import {login} from "../Controllers/auth.js"

const router = express.Router();

router.post("/register", register);
router.post("/login", login)

export default router;