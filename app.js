const express = require('express');
const app = express();
const port = 3000;
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.set('view engine', 'pug');
app.use('/static/', express.static('public'));

app.use(mainRoutes);
app.use('/projects', projectRoutes);

//404 Error creator
app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});
//Error handler
app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});