/*let mysql = require('mysql');
const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors())

var objetos = [
  {nombre: "juan", edad:20},
  {nombre: "Andres", edad:15},
  {nombre: "Leo", edad:22},
  {nombre: "Leo", edad:22},
]

var datos

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "usuarios_db"
});

function leer(){

con.connect(function(err) {
  if (err) throw err;
  con.query("select * from arboles",
    function(err,result,fields){
    if (err) throw err;
    datos = result;
    });
  });
}

app.get('/', (req, res) => {
  res.send(datos);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
*/
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configuración de la conexión a MySQL
let con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: "basebd"
});

// Conectar a la base de datos al iniciar el servidor
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM hola", function(err, results) {  // <-- results con "s"
    if (err) throw err;
    datos = results;  // <-- results con "s"
    console.log(results);  // <-- results con "s"
  });
});

// Ruta principal - ejecuta la consulta cuando se accede
app.get('/', (req, res) => {
  res.send(datos);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});