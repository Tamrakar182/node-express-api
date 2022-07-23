import Express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = Express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) =>  res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server Running On PORT: http://localhost:${PORT}`));

