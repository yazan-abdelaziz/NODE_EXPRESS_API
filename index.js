import express from 'express';

const app = express();
const PORT = 5000;
app.use(express.json());

// Get Route
app.get('/', (req, res) =>
{
    console.log('get');
    res.send('Hello World');
});

app.listen(PORT, () => console.log(`Server is Running on port: http://localhost:${PORT}`));