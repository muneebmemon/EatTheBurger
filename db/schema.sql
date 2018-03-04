-- BURGER SCHEMA --

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(40) NOT NULL,
    devoured BOOLEAN DEFAULT false
);