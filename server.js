const express = require("express");
const expresshb = require("express-handlebars");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", expresshb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const db = require("./models");

apiRoutes = require("./controllers/api-routes.js");

app.use(apiRoutes);

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, function () {
        console.log(`server listening at localhost ${PORT}`);
    });
});