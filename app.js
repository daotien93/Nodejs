const express = require('express');
const app = express();
const port = 3000;
const router = require('./apiRouter.js');
// Define path
router.get('/', (req, res, next ) => {
    res.json('Home');
});

app.use('/api/v1', router);

app.listen(3000, () => {
    console.log(`Server running on port ${port}`);
});