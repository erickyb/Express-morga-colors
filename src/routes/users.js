const { Router } = require("express");

const router = Router();

// router.get('/UserName', (req, res) => {
//   res.send("User name route");
// });

router.get('/users', (req, res) => {
  console.log(req.body);
  res.render('users')
});

module.exports = router;