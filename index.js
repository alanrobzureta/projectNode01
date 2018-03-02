const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const passport = require('passport')
const BasicStrategy = require('passport-http').BasicStrategy
const app = express();

/** PASSPORT BASIC **/
passport.use(require('./src/auth/basic'))


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(passport.initialize())

app.get('*', passport.authenticate('basic',{ session: false }))

require('./src/index')(app)

//listen(porta, host, callback)
//quando não passa nada no host () ele entende como host local.
app.listen(9000, () => {
    console.log('Express has ben started')
})
