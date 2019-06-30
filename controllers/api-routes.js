const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async function (req, res) {

    const data = await db.Burger.findAll({ include: [db.Customer] })
    console.log(data);
    res.render("index", { burgers: data });
});



router.post("/api/addburger/", function (req, res) {
    db.Burger.create({ burger_name: req.body.burger_name }).then(burgerPost => {
        res.json(burgerPost);
    });
});

router.post("/api/postcustomer/", function (req, res) {
    db.Customer.create({ name: req.body.name }).then(eaterPost => {
        res.json(eaterPost);
    });
});

router.put("/api/putburger/", function (req, res) {
    db.Burger.update({ devoured: 1, CustomerId: req.body.CustomerId }, { where: { id: req.body.id } }).then(burgerPut => {
        res.json(burgerPut);
    });
});
module.exports = router;