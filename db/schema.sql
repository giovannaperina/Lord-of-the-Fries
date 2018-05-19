
CREATE DATABASE fries_db;
USE fries_db;

CREATE TABLE fries
(
	id int NOT NULL AUTO_INCREMENT,
	fries_name varchar(255) NOT NULL,
	eat BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
