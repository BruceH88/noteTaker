DROP DATABASE IF EXISTS notes_db;
CREATE DATABASE notes_db;
USE notes_db;

-- Create the notes table
CREATE TABLE notes
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (100) NOT NULL,
  body VARCHAR (255) NOT NULL,
  PRIMARY KEY(id)
);
