const express = require('express');
const router = express.Router();
const { projects } = require('../data/projectData.json');
const { developer } = require('../data/devData.json');


router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    
    projectData = projects[id];
    
    if (projectData) {
        res.render('project', {projectData, developer});
    } else {
        next();
    }
    
});

module.exports = router;