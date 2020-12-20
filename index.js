import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv/config.js';
import path from 'path'; 

const __dirname = path.resolve();
const app = express();

//ControllerRoutes
import broadcastRoute from './routes/broadcasts.js'
import subscriberRoute from './routes/subscribers.js'

app.use('/api/subscribers', subscriberRoute);
app.use('/api/broadcasts', broadcastRoute);


//connect to db
mongoose.connect(process.env.MDB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.HOST, () => console.log("running on localhost port 3000")))
    .catch((error) => console.log(error.message));

app.use(express.static('views'));

app.use("/css", express.static(__dirname + 'views/css'));
app.use("/img", express.static(__dirname + 'views/images'));
app.use("/js", express.static(__dirname + 'views/js'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})


