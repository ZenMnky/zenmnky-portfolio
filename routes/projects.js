const express = require('express');
const router = express.Router();
const { projects } = require('../data/projectData.json');
const { developer } = require('../data/devData.json');


router.get('/:id', (req, res) => {
    const { id } = req.params;
    projectData = projects[id];
        
    res.render('project', {projectData, developer});
});

module.exports = router;