var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '');

var User = db.define('User', {
  username: Sequelize.STRING
});
var Message = db.define('Message', {
  message: Sequelize.STRING
});
var Room = db.define('Room', {
  roomname: Sequelize.STRING
});

Message.belongsTo(User);
User.hasMany(Message);
Message.belongsTo(Room);
Room.hasMany(Message);

User.sync();
Message.sync();
Room.sync();

exports.User = User;
exports.Message = Message;
exports.Room = Room;






// var mysql = require('mysql');



// // Create a database connection and export it from this file.
// // You will need to connect with the user "root", no password,
// // and to the database "chat".
// exports.dbConnection = mysql.createConnection({
//       user: 'root',
//       password: '',
//       database: 'chat'
//     });
// dbConnection.connect();

