const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");
async function registerUser(req, res) {
  try {
    const { name, email, password, profile_pic } = req.body;
    const checkEmail = await UserModel.findOne({ email });
    if (checkEmail) {
      return res.status(500).json({
        message: "User Exists with provided email",
        error: true,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    const payload = {
      name,
      email,
      profile_pic,
      password: hashpassword,
    };

    const user = new UserModel(payload);
    const userSave = await user.save();

    return response.status(201).json({
      message: "User Created Successfully",
      data: userSave,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = registerUser;
