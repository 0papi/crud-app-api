const express = require("express");

const router = express.Router();
const {
  getAllData,
  getData,
  addData,
  updateData,
  deleteData,
} = require("../controllers/dataController");

router.route("/").get(getAllData).post(addData);
router.route("/:id").get(getData).put(updateData).delete(deleteData);

module.exports = router;
