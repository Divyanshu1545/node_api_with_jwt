const service = require("./products.service");

module.exports = {
  getAllProducts: (req, res) => {
    service.getAllProducts((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          success: 0,
          message: "There are no products in the store",
        });
      }
      return res.json({
        success: 1,
        message: results,
      });
    });
  },
  getProductByID: (req, res) => {
    const id = req.params.id;
    console.log(id);
    service.getProductByID(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (results.length==0) {
        return res.json({
          success: 0,
          message: "There is no product with this id",
        });
      }
      return res.json({
        success: 1,
        message: results,
      });
    });
  },
  deleteById:(req, res) => {
    const id = req.params.id;
    console.log(id);
    service.deleteProduct(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      
      return res.json({
        success: 1,
        message: results['affectedRows']==0?"No product found with the provided ID":"Product deleted successfully",
      });
    });
  },
};
