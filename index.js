const express = require('express');
const app = express();
const port = 5000 || 8080 || 8000;



/* 
*******************
    Middleware
*******************
*/




app.get('/', (req, res) => {
    res.status(200).json({
        status: true,
        message: 'Node JS Server Working is Perfect',
    });
});

app.listen(port, () => {
    console.log(`Watch Me Server Running Perfect on This Port ${port}`);
});

module.exports = app;