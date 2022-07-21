import { Express } from "express";

const router = Express.Router();

router.get('/users', (req , res)=>{
    res.send('Hello');
})

export default router;