DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;
-- DROP TABLE if exists users, rooms, messages
CREATE TABLE users (
  userid INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY (userid)
);

CREATE TABLE rooms (
  roomid INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(20),
  PRIMARY KEY (roomid)
);

CREATE TABLE messages (
  messageid INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(200),
  userid INT,
  roomid INT,
  PRIMARY KEY (messageid),
  FOREIGN KEY (userid) REFERENCES users(userid),
  FOREIGN KEY (roomid) REFERENCES rooms(roomid)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

