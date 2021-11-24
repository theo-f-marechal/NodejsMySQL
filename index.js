const mysql = require('mysql2');

const mysqlConfig = {
  host: "mysql_server",
  user: "theo",
  password: "0123",
  database: "njsdb"
}

let con = null

const app = express()

app.get('/', function (req, res) {
  res.send('hello world')
  con =  mysql.createConnection(mysqlConfig);
  con.connect(function(err) {
    if (err) throw err;
    res.send('connected')
  });
})

app.listen(4000)

console.log("listening on port 4000")