const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: 'Index page'
  });
});

router.get("/about", (req, res) => {
  const title = 'Acerca de '
  res.render('about');
});

router.get("/dashboard", (req, res) => {
  res.render('dashboard');
});

module.exports = router;