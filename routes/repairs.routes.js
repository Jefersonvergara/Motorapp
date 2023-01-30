const { Router } = require("express");
const { getList, getId, createDate, updateStates, deleteRepairs } = require("../controllers/repairs.controller");

const router = Router();

router.get("/", getList);
router.get("/:id", getId);
router.post("/", createDate);
router.patch("/:id", updateStates);
router.delete("/:id",deleteRepairs)

module.exports = {
  repairRouter: router,
};
