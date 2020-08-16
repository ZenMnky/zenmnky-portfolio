const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const { projects } = require('./data/projectData.json');
const { developer } = require('./data/devData.json');
const requiredData = {projects, developer};

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
    console.log(`Error ${err.status}:  ${err.message}`);
    res.render('error', requiredData);
});

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});