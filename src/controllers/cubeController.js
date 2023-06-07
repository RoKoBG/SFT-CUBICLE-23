const router = require("express").Router();
const cubeService = require("../services/cubeService");
// Path /cubes/create
router.get("/create", (req, res) => {
  console.log(cubeService.getAll());
  res.render("create");
});

router.post("/create", async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  await cubeService.create({
    name,
    description,
    imageUrl,
    difficultyLevel,
  });

  res.redirect("/");
});
router.get("/:cubeId/details", async (req, res) => {
  const cube = await cubeService.getOne(req.params.cubeId).lean();
  if (!cube) {
    return res.redirect("/404");
  }
  res.render("details", { cube });
});

router.get('/:cubeId/attach-accessory', (req,res)=>{
  res.render('accessory/attach')
})

module.exports = router;
