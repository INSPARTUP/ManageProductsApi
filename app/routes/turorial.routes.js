module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Product
  router.post("/", tutorials.create);

  router.get("/", tutorials.findAll);
  router.get("/type", tutorials.findAlltype);
  router.get("/NomType", tutorials.findNomType);
  // Retrieve all Products

  // Retrieve all published Products
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Product with id
  router.get("/:id", tutorials.findOne);
  // Update a Product with id
  router.put("/:id", tutorials.update);

  // Delete a Product with id
  router.delete("/:id", tutorials.delete);

  // Create a new Product
  router.delete("/", tutorials.deleteAll);

  
  app.use("/api/produits", router);
};
