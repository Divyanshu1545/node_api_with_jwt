const { create, getUserByEmail } = require("./user.service");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

module.exports = {
  createUser: (req, res) => {
    const body = req.body;
    const salt = genSaltSync(10);
    body.password = hashSync(body.password, salt);
    create(body, (err, results) => {
      if (err) {
        console.log("There is an error");
        return res.status(500).json({
          success: 0,
          message:
            "Please enter valid details",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getUserByEmail: (req, res) => {
    const body = req.body;
    getUserByEmail(body.email, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Internal Server Error",
        });
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "User Not Found",
        });
      }

      const passwordMatches = compareSync(body.password, results.password);
      if (!passwordMatches) {
        return res.status(401).json({
          success: 0,
          message: "Invalid Password",
        });
      }

      const token = sign({ userId: results.id }, "your-secret-key", {
        expiresIn: "1h",
      });
      return res.status(200).json({
        success: 1,
        message: "Login Successful",
        token: token,
      });
    });
  },
};
