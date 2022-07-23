import Express from 'express';

const router = Express.Router();

const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 24  
    }
]

router.get('/', (req , res)=>{
    console.log(users);
    res.send('Hello');
})

router.post('/', (req, res)=>{
    
});

export default router;