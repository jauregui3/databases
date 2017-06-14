// var models = require('../models');
var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) {
      db.Message.findAll({include: [db.User, db.Room]})
        .then(function(err, results) {
          res.json(results);
        });
      /*models.messages.get(function(err, result) {
        if (err) {
          console.error(err);
        } else {
          res.json(result);
        }
      });*/
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      db.User.findOrCreate({where: {username: req.body.username}})
        .spread(function(user, created) {
          db.Message.create({
            userid: user.get('userid'),
            message: req.body.message
            // roomid: room.get('roomid')
          }).then(function(err, results) {
            res.sendStatus(201);
          });
        });
      //var params = [req.body.message, req.body.username, req.body.roomname];
      /*models.messages.post(params, function(err, results) {
        if (err) {
          console.error(err);
        } else {
          res.sendStatus(201);
        }
      });*/
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      db.User.findAll()
        .then(function(err, results) {
          res.json(results);
        });
      /*models.users.get(function(err, result) {
        if (err) {
          console.error(err);
        } else {
          res.json(result);
        }
      });*/
    },
    post: function (req, res) {
      db.User.findOrCreate({where:{username: req.body.username}})
        .spread(function(user, created) {
          res.sendStatus(201);
        });

    /*  var params = [req.body.username];
      models.users.post(params, function(err, results) {
        if (err) {
          console.error(err);
        } else {
          res.sendStatus(201);
        }
      });
    }*/
    }
  }
};

