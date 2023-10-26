const express = require("express");
const router = express.Router();
const ResponseTemplate = require("../helper/template.helper");
const userRoute = require("./user.route");

router.get("/ping", (req, res) => {
  res.send("pong");
});

// router.get("/user", (req, res) => {
//   let resp = ResponseTemplate(null, "success", null, 200);
//   res.json(resp);
// })
router.use("/user", userRoute)

module.exports = router;