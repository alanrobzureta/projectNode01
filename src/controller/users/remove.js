const User = require('./../../model/user');

module.exports = function(req, res){
    console.log('chamou o delete');
    User.findByIdAndRemove(req.params.id).then(function(){
        res.redirect('/users');
    }).catch(function(error){
        console.log(error);
    });
}