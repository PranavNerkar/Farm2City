var exp = require("express");
var mysql = require("mysql2");
var bp = require("body-parser");
var cors = require("cors");

var app = exp();
app.use(cors());
app.use(bp.json());

app.listen(9000, function () {
  console.log("Listining to 9000");
});

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "miniproject",
});

conn.connect(function (err) {
  if (!err) {
    console.log("DB Connected");
  } else {
    console.log("Connection Failld");
  }
});

app.post("/getFarmerInfo", function (req, res) {
  var email = req.body.email;
  var pass = req.body.pass;
  var query =
    "select count(*) as entry from farmers where Email= '" +
    email +
    "' and Password= '" +
    pass +
    "'";
  conn.query(query, function (err, result) {
    if (!err) {
      if (result[0].entry == 1) {
        res.json(result);
      } else if (result[0].entry == 0) {
        var q1 =
          "select count(*) as eFound from farmers where Email= '" + email + "'";
        conn.query(q1, function (err1, result1) {
          if (!err1) {
            if (result1[0].eFound == 0) {
              result[0].entry = 0;
              res.json(result);
            } else {
              result[0].entry = -1;
              res.json(result);
            }
          }
        });
      }
    } else {
      console.log("in Error");
    }
  });
});

app.post("/getBuyerInfo", function (req, res) {
    var email = req.body.email;
    var pass = req.body.pass;
    var query =
      "select count(*) as entry from buyers where Email= '" +
      email +
      "' and Password= '" +
      pass +
      "'";
    conn.query(query, function (err, result) {
      if (!err) {
        if (result[0].entry == 1) {
          res.json(result);
        } else if (result[0].entry == 0) {
          var q1 =
            "select count(*) as eFound from buyers where Email= '" + email + "'";
          conn.query(q1, function (err1, result1) {
            if (!err1) {
              if (result1[0].eFound == 0) {
                result[0].entry = 0;
                res.json(result);
              } else {
                result[0].entry = -1;
                res.json(result);
              }
            }
          });
        }
      } else {
        console.log("in Error");
      }
    });
  });
