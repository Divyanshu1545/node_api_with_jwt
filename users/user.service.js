  const pool = require("../config/database");
  module.exports = {
    create: (data, callBack) => {
      pool.query(
        
        `insert into users(user_name, email, password) 
          values(?, ?, ?)`,
        [data.user_name, data.email, data.password],
        (err, results, fields) => {
          if (err) {
            return callBack(err);
          }
          return callBack(null, results);
        }
      );
    },
    getUserByEmail:(email, callBack) => {
      pool.query(
        `select * from users where email=? `,
        [email],
        (err, results, fields) => {
          if (err) {
            return callBack(err);
          }
          return callBack(null, results);
        }
      );
    },
  };
