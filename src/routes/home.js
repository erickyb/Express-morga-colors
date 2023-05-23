const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  let isActive = false;
  const users = [
    {
      id: 1,
      name: "Dios",
      lastname: "Maria"
    },
    {
      id: 2,
      name: "Roxana",
      lastname: "Emily y Richard"
    }

  ]

  res.render("index", {
    title: 'Index page',
    isActive,
    users
  });
});

router.get("/about", (req, res) => {
  const title = 'Acerca de '
  res.render('about', {
  });
});

router.get("/dashboard", (req, res) => {
  res.render('dashboard');
});

module.exports = router;