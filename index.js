var mysql =  require('mysql');
var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/json'});
    var q = url.parse(req.url, true);
    var datos = q.query; 

    var accion = datos.accion;
   

    let conexion = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "biblioteca_bd"
    });
    let sql = "";
    let parametros = []; 
    var tabla = datos.tabla

    conexion.connect(function(err){
        if(tabla = "libro"){
            switch (accion){
                case "insert":
                    sql = "insert into libro " + 
                    "(nombre, genero, fecha_lanzamiento, autor)" + 
                    "values (?, ?, ?, ?)"
                    parametros = [datos.nombre, datos.genero, datos.fecha_lanzamiento, datos.autor];
                    break;
                case "select":
                    sql = "select * from libro";
                    break;
                case "update": 
                    sql = "update libro" + "set nombre = ?, genero = ?, fecha_lanzamiento = ?, autor =? "
                     + "where id_libro = ? ";
                     parametros = [datos.nombre, datos.genero, datos.fecha_lanzamiento, datos.autor];
                     break;
                case "delete":
                    sql= "delete from libro " + "where id_libro = ?"
                    


            }
        } else{   if(tabla = "alumno"){
            switch (accion){
                case "insert":
                    sql = "insert into alumno " + 
                    "(num_cuenta, nombre, apellido)" + 
                    "values (?, ?, ?)"
                    parametros = [datos.num_cuenta, datos.nombre, datos.apellido];
                    break;
                case "select":
                    sql = "select * from alumno";
                    break;
                case "update": 
                    sql = "update alumno" + " set num_cuenta = ?,  nombre = ?, apellido = ? "
                     + "where num_cuenta = ? ";
                     parametros = [datos.num_cuenta, datos.nombre, datos.apellido];
                     break;
                case "delete":
                    sql= "delete from alumno " + "where num_cuenta = ?"
                    parametros = [datos.num_cuenta, datos.nombre, datos.apellido];


            }
        }else {if(tabla = "prestamo_libros"){
            switch (accion){
                case "insert":
                    sql = "insert into prestamo_libros " + 
                    "(id_libro, num_cuenta, )" + 
                    "values (?, ?, ?)"
                    parametros = [datos.id_libro, datos.num_cuenta,];
                    break;
                case "select":
                    sql = "select * from prestamo_libros";
                    break;
                case "update": 
                    sql = "update prestamo_libros" + " set id_libro = ?,  num_cuenta = ?"
                     + "where id_prestamo = ? ";
                     parametros = [datos.id_libro, datos.num_cuenta,];
                     break;
                case "delete":
                    sql= "delete from prestamo_libros " + "where id_prestamo = ?"
                    parametros = [datos.id_libro, datos.num_cuenta,];


            }
        }}} 

         connect.connect(function(err){
            
            if(err){
                console.log(err)
            }else {
                connect.query(sql, parametros, function(err, result){
                    if (err){
                        console.log(err);
                    } else{
                        res.write(JSON.stringify(result));
                        res.end();
                    }
                })};
     })})


}).listen(3000);