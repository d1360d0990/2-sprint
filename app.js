const express = require ('express');
const app = express ();

const path = require ('path');

app.use (express.static(path.resolve(__dirname, "./public")));

app.set ('port',process.env.PORT || 3070);

app.listen (app.get('port'), ()=> console.log('listening on port'));

app.get ('/', (req, res) => res.sendFile(path.resolve (__dirname,"./views/producto.html")));



app.get ('/register', (req, res) => res.sendFile(path.resolve (__dirname,"./views/register.html")));

app.get ('/login', (req, res) => res.sendFile(path.resolve (__dirname,"./views/login.html")));