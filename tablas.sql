create table libro (
  id_libro int auto_increment primary key ,
    nombre varchar(200),
    genero varchar(1),
    fecha_lanzamiento date,
    autor varchar (200)
);

create table alumno (
num_cuenta varchar (10) primary key,
nombre varchar (200),
apellido varchar (200)
);

create table prestamo_libros (
id_prestamo int auto_increment primary key,
id_libro int, 
constraint foreign key fk_id_libro (id_libro) references libro (id_libro),
num_cuenta varchar (10),
constraint foreign key fk_num_cuenta (num_cuenta) references alumno (num_cuenta)
);

insert into libro (nombre, genero, fecha_lanzamiento, autor)
values ('El Perfume', 'Terror', 1985-01-01, 'Patrick Suskind');

ALTER TABLE libro
MODIFY genero varchar (200)
AFTER  nombre;

UPDATE libro
SET genero = 'Terror'
WHERE id_libro = 1;