const User = require("../models/user.model");

exports.getUser = async (req, res) => {
    
  const users = await User.findAll({
    where: {
      status: 'available',
    },
  });

  res.status(200).json({
    status: 'success',
    message: 'The User found were successfully',
    users,
  });

}

exports.getId = async (req, res) => {
  const { id } = req.params;

  const userid = await User.findOne({
    where: {
      id,
      status: "available",
    },
  });

  res.json({
    status: "success",
    message: "The User found was successfully",
    userid,
  });
};
//
exports.getId = async (req, res) => {
  const { id } = req.params;

  const userid = await User.findOne({
    where: {
      id,
      status: "available",
    },
  });
  if (userid===null){
    return res.status(404).json({
      status: 'error',
      message: 'the user was not found',
      userid,
    })
  }
  res.json({
    status: "success",
    message: "The User found was successfully",
    userid,
  });
};

  exports.createUser = async (req, res) => {
    const {name, email, password} = req.body;

    const newUser = await User.create({

      name, email, password

    });
    res.json({
      status: 'success',
      message: 'ROUTE - POST DESDE EL CONTROLADOR',
      newUser,
    });
  };

 

  exports.updateDate = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
  
    const userid = await User.findOne({
      where: {
        id,
        status: "available",
      },
    });
  
    if (userid === null) {
      return res.status(404).json({
        status: "error",
        message: "the user was not found",
        userid,
      });
    }
  
    const updateUser = await userid.update({ name, email });
  
    res.json({
      status: "success",
      message: "The User update",
      updateUser,
    });
  };

  exports.deleteUser = async (req, res) => {
    const { id } = req.params;
  
    const userid = await User.findOne({
      where: {
        id,
        status: "available",
      },
    });
  
    if (!userid) {
      return res.status(404).json({
        status: "error",
        message: "The user was not found",
      });
    }
  
    userid.update({ status: "disable" });
  
    res.json({
      status: "success",
      message: "The User delete",
    });
  };
