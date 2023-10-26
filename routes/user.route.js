const express = require("express");
const router = express.Router();
const { test } = require("../controller/user.controller");
// const { CheckPostReq } = require("../middleware/middleware");

// router.use(PrintSuccess)

router.get("/", test);

// router.post("/", CheckPostReq, Insert);

module.exports = router;
