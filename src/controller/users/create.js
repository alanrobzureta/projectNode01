const User = require('../../model/user')

module.exports = function(req, res) {
    console.log(req.body);
    User.create(req.body)
        .then((user) => {
            return res.redirect('/');
        })
        .catch((error) => {
            console.log(error)
            return
        })
}
