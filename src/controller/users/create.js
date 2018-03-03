const User = require('../../model/user')

module.exports = (req, res) => function () {
    console.log(req.body);
    User.create(req.body)
        .then((user) => {
            return res.redirect('/')
        })
        .catch((error) => {
            console.log(error)
            return
        })
}
