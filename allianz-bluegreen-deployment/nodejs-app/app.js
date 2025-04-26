const express = require('express');
const app = express();

const deploymentColor = process.env.DEPLOYMENT_COLOR || 'unknown';

app.get('/', (req, res) => {
  res.send(`Hello from the ${deploymentColor} deployment!`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
