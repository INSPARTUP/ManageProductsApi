const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connecté à la base de données!");
  })
  .catch(err => {
    console.log("Impossible de se connecter à la base de données!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue dans l'application Kagu." });
});

require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur fonctionne sur le port ${PORT}.`);
});
