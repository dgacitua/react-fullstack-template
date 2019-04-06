import os from 'os';
import express from 'express';

const app = express();

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(3001, () => console.log('Backend listening on port 3001!'));