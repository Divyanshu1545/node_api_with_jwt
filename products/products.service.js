const pool = require("../config/database");

module.exports = {
  getAllProducts: (callBack) => {
    pool.query(`select * from products`, [], (err, results, fields) => {
      if (err) {
        return callBack(err);
      }
      return callBack(null, results);
    });
  },
  getProductByID: (id, callBack) => {
    pool.query(
      `select * from products where id=?`,
      [id],
      (err, results, fields) => {
        if (err) {
          return callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
  deleteProduct: (id, callBack) => {
    pool.query(
      `delete from products where id=?`,
      [id],
      (err, results, fields) => {
        if (err) {
          return callBack(err);
        }
        return callBack(null, results);
      }
    );
  },
};
