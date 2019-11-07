const functions = require('firebase-functions');
const cors = require('cors');
const app = require('express')();
const FBAuth = require('./util/fbAuth');

const { signUp, login, getAuthenticatedUser, getUserDetails, sendForgotPasswordEmail } = require('./handlers/users');

app.use(cors());

//User routes
app.post("/signup", signUp);
app.post("/login", login);
app.post("/forgotpassword", sendForgotPasswordEmail);
app.get('/user', FBAuth, getAuthenticatedUser);
app.get('/user/:username', getUserDetails);

exports.api = functions.https.onRequest(app);