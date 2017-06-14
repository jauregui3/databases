var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //db.dbConnection.connect();
      var queryString = 'SELECT message.id, messages.message, users.username,rooms.roomname FROM messages, users, rooms WHERE messages.userid = users.userid AND messages.roomid = rooms.roomid';
      db.dbConnection.query(queryString, function(err, results) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });

      //db.dbConnection.end();
    }, // a function which produces all the messages
    post: function (params, callback) {
      //db.dbConnection.connect();
      var addMessage = 'INSERT INTO messages (message, userid, roomid) VALUES (?, (SELECT userid FROM users WHERE username = ?), (SELECT roomid FROM rooms WHERE roomname = ?))';
      db.dbConnection.query(addMessage, params, function(err, results) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
      //db.dbConnection.end();
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      //db.dbConnection.connect();
      var queryString = 'SELECT * FROM users';
      db.dbConnection.query(queryString, function(err, results) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });

      //db.dbConnection.end();
    },
    post: function (params, callback) {
      //db.dbConnection.connect();
      var adduser = 'INSERT INTO users(username) VALUES (?)';
      db.dbConnection.query(adduser, params, function(err, results) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, results);
        }
      });
      //db.dbConnection.end();
    }
  }
};

