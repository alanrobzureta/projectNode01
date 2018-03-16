const User = require('./../../model/user');

module.exports = function(req, res){
    User.find({}).then(function(users){
        return res.render('users/index', {
            users
        });
    }).catch(function(err){
        console.log(err);
    });
}