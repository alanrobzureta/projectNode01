const User = require('../../model/user')

module.exports = function(req, res) {
    console.log(req.body);
    let user = new User(req.body);
    user.password = user.genHash(user.password);

    user.save()
        .then((user) => {
                 return res.redirect('/');
             })
            .catch((error) => {
                 console.log(error)
                 return
            })



    // User.create(req.body)
    //     .then((user) => {
    //         return res.redirect('/');
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //         return
    //     })
}
