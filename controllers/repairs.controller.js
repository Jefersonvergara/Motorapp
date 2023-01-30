const { where } = require("sequelize");
const Repair = require("../models/repair.model");



exports.getList = async (req, res) => {
  const repairs = await Repair.findAll({
    where: {
      status: "pending",
    },
  });

  res.status(200).json({
    status: "success",
    message: "The Repairs found was successfully",
    repairs,
  });
  };

exports.getId= async(req, res) => {
  const { id } = req.params;

  const repairsid = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
  });

  if (repairsid === null) {
    return res.status(404).json({
      status: "error",
      message: "the Repair was not found",
      repairsid,
    });
  }

  res.json({
    status: "success",
    message: "The Repair found was successfully",
    repairsid,
  });
  };

  exports.createDate = async (req, res) => {
    const { date, userId } = req.body;
  
    const newDate = await Repair.create({
      date, userId
    });
    res.json({
      status: "success",
      message: "Date saved",
      newDate,
    });
  };

  exports.updateStates= async (req, res) => {
    const { id } = req.params;

  const repairsid = await Repair.findOne({
    where: {
      id,
      status: "pending",
    },
  });

  if (!repairsid) {
    return res.status(404).json({
      status: "error",
      message: "The Repairs was not found",
    });
  }

  repairsid.update({ status: "completed" });

  res.json({
    status: "success",
    message: "The User update",
  });
  };

  exports.deleteRepairs= async (req, res) => {
    const { id } = req.params;

    const repairsid = await Repair.findOne({
      where: {
        id,
        status: "pending",
      },
    });
  
    if (!repairsid) {
      return res.status(404).json({
        status: "error",
        message: "The Repairs was not found",
      });
    }
  
    repairsid.update({ status: "cancelled" });
  
    res.json({
      status: "success",
      message: "The User Delete",
    });
  };