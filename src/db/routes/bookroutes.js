const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookcontroller");

router.get("/listBooks", bookController.listBooks);
router.put("/updateBooks", bookController.updateBooks);
router.delete("/delBook", bookController.delBook);
router.post("/addBook", bookController.addBook);

module.exports = router;
