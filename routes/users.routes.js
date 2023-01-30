const { Router } = require("express");
const { getUser, getId, createUser, updateDate, deleteUser } = require("../controllers/users.controller");

const router = Router();

router.get("/", getUser);
router.get("/:id", getId);
router.post("/", createUser);
router.patch("/:id", updateDate);
router.delete("/:id", deleteUser);

module.exports = {
  userRouter: router,
};
