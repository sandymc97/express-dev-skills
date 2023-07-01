var express = require('express');
var router = express.Router();
var skillsCtrl= require("../controllers/skills");


//GET skills (all dev skills page)
router.get('/', skillsCtrl.index);

// get /skills/new (page that has input to add skill)
router.get("/new", skillsCtrl.new);

//get /skills/:id (page when you click specific skill)
router.get("/:id", skillsCtrl.show);

//POST /skills (when you CLICK SAVE SKILL)
router.post('/', skillsCtrl.create);

//DELETE /skills/:id
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
