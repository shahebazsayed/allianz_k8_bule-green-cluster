const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => res.send(`Hello from ${process.env.VERSION || 'blue'} version!`));
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
