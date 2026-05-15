// building off of class 7 notes
// comments are things that are different from class 7
const express = require('express');
const nunjucks = require('nunjucks');
const cookieParser = require('cookie-parser');
// adding session libraries
const nedb = require('@seald-io/nedb');
const expressSession = require('express-session');
const nedbSessionStore = require('nedb-promises-session-store');

let app = express();
nunjucks.configure('views', {
	autoescape: true,
	express: app,
});
app.set('view engine', 'njk');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// initializing session storage and storing posts in post db and users in session db
let database = new nedb({
	filename: 'posts.db',
	autoload: true,
});
const nedbSessionInit = nedbSessionStore({
	connect: expressSession,
	filename: 'users.db',
});
app.use(
	expressSession({
		store: nedbSessionInit,
		cookie: {
			maxAge: 365 * 24 * 60 * 60 * 1000,
		},
		secret: 'supersecret123',
	}),
);

app.get('/', (request, response) => {
	if (request.cookies.visits) {
		let visits = request.cookies.visits;
		visits++;
		response.cookie('visits', visits, {
			expires: new Date(Date.now() + 1000 * 60 * 60),
		});
	} else {
		let oneHourInMs = 1000 * 60 * 60;
		response.cookie('visits', 1, {
			expires: new Date(Date.now() + oneHourInMs),
		});
	}

	// finding the post data using the post database
	database.find({}, (err, foundData) => {
		response.render('index.njk', {
			numVisits: request.cookies.visits,
			posts: foundData, // all of the posts
			user: request.cookies['connect.sid'].slice(2), // which user made the post that will be checked on the client-side njk
		});
	});
});

app.get('/about', (request, response) => {
	response.render('about.njk');
});

// new post handler of form
app.post('/make-post', (req, res) => {
	// printing out the data of the body
	console.log(req.body);
	// syntax to remove the s: at the beginning of the id string
	// we use req.cookies['connect.sid'] because req.cookies.connect.sid would give us an error...connect.sid is a string with a . in it so we just need to use different syntax
	// .slice(2) removes the s: at the beginning
	console.log(req.cookies['connect.sid'].slice(2));
	let data = {
		media: req.body.text,
		userId: req.cookies['connect.sid'].slice(2), // stores which user made the post in the post db
	};
	database.insert(data);
	res.redirect('/');
});


app.listen(7001, () => {
	console.log('http://localhost:7001');
});
