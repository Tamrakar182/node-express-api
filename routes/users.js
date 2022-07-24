import Express from 'express';
import {v4 as uuidv4} from 'uuid';

const router = Express.Router();

let users = [];

router.get('/', (req , res) => {
    res.send(users);
})

router.post('/', (req, res) => {
    const user = req.body;

    users.push( {... user, id: uuidv4()});

    res.send(`User with the username ${user.firstName} added to the database!`);
});


// /users/2 => req.params {id : 2}

router.get('/:id', (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(req.params);
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    //id to delete 123

    //john 123
    //jane 321

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} deleted from the database.`);


})

export default router;