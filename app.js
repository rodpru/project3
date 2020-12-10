require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");

require("./configs/passport");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true,
  })
);

app.use(express.static(path.join(__dirname, 'dist')));

app.use(
  session({
    secret: "schoolapp",
    cookie: { expire: 60000 },
    rolling: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

// Allowing the front-end to connect and get the resources from the back-end
//on port 3000 because that is the origin from the frontend
app.use(
  cors({
    credentials: true,
    origin: [process.env.CLIENT_HOSTNAME, 'http://localhost:3000'],
  })
);

const index = require("./routes/index");
app.use("/", index);
const schoolRoutes = require("./routes/school-routes");
app.use("/", schoolRoutes);
const authRoutes = require("./routes/auth-routes");
app.use("/api", authRoutes);

module.exports = app;
