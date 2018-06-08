import express from 'express';
import os from 'os';

const app = express();

if (process.env.NODE_ENV === 'production') app.use('/', express.static('./dist/client'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));