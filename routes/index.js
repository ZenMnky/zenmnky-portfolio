const express = require('express');
const router = express.Router();
const { projects } = require('../data/projectData.json');
const { developer } = require('../data/devData.json');
const requiredData = {projects, developer};

router.get('/', (req, res) => {
    res.render('index', requiredData);
});

router.get('/about', (req, res) => {
    res.render('about', requiredData);
});

router.get('/resume', (req, res) => {
    res.render('resume', requiredData);
});

router.get('/projects:id', (req, res) => {
    res.render('project', requiredData)
});
module.exports = router;
