# Week 5: 2/24/26

## Agenda

1. Project #2 Concept Proposals
2. Introduction to Databases
3. Introduction to Templates

---

## Project #2 Concept Proposals

## Introduction to Databases

With Node.js we can use a variety of database engines such as MySQL, Postgres, MongoDB, and so on. At a very high level, most databases offer the following four types of operations:

- `insert`, for adding new data to the database (e.g. a Twitter user sending a new tweet)
- `remove`, for deleting existing data from the database (e.g. a Twitter user removing their tweet)
- `update`, for updating existing data in the database (e.g. a Twitter user editing a tweet they’d already published), and
- `find`, for looking up data in the database (e.g. for seeing all tweets sent by a user, on their profile page.)

For ease-of-use purposes, we will be using a simple database called _nedb._ [nedb](https://www.npmjs.com/package/nedb) is a MongoDB compatible in-memory or on disk datastore that is quick and easy for us to work with without going through a big setup process. However, `nedb` is no longer maintained, so we are using a forked version called [`seald-io/nedb`](https://www.npmjs.com/package/@seald-io/nedb) that continues to be updated with the latest Node and updated dependencies.

In order to use it, we have to install it as we would any normal server side node module:

```
npm install @seald-io/nedb
```

Below is a quick reference to show you how to create a new database, as well as how the four types of operations mentioned above work. See the [**documentation**](https://github.com/seald/nedb?tab=readme-ov-file#documentation) for more.

### Creating a database

The code below imports the `nedb` library into our server-side code, and creates a file on disk which will store our data (the file is called `data.db` in this example. You can use any extension you like, `.db` isn’t mandatory.)

```jsx
// Importing the nedb library, and telling it to create a new datastore for us.
let nedb = require("@seald-io/nedb");
let database = new nedb({ filename: "data.db", autoload: true });
```

Once you’ve created a database, you are ready to perform operations on it.

### Insert

Since the database operates by accessing the hard drive (and the hard drive is slow compared to the computer’s memory,) all operations are performed asynchronously, and results are delivered to us using a callback. The `insert` operation takes two arguments:

- the data we want inserted into the database
- a callback, which tells us whether the database encountered any errors, and confirms the data that was added.

```jsx
// Importing the nedb library, and telling it to create a new datastore for us.
let nedb = require("@seald-io/nedb");
let database = new nedb({ filename: "data.db", autoload: true });

// Create a JavaScript Object with data to store
let datatosave = {
  name: "sam",
  message: "Hello world",
};

// Insert the data into the database
database.insert(datatosave, function (err, newDocs) {
  console.log("err: ", err);
  console.log("newDocs: ", newDocs);
});
```

If the operation completes successfully, the returned object (`newDocs` in the example above) should be identical to the data we passed for insertion, with one addition: an `_id` field, which the database uniquely assigns to all objects. The `_id` is useful in being able to uniquely identify each element in the database.

### Find

Finding data in a database requires us translating what we’re looking for into a _query_. Different databases use different formats for their queries. In `nedb`, a query is formatted as a regular Javascript object, with a few special fields which take different roles. Think of a query as a _filter_, which tells the database which objects to return. If the filter is empty, the database will return everything. The more specific the filter gets, the fewer elements will be returned.

Below are a few examples of queries.

```jsx
// Importing the nedb library, and telling it to create a new datastore for us.
let nedb = require("@seald-io/nedb");
let database = new nedb({ filename: "data.db", autoload: true });

/*
...
Inserting four items into the database
...
*/
db.insert({ planet: "earth", material: "solid" }, (err, newDocs) => {});
db.insert({ planet: "mars", material: "solid" }, (err, newDocs) => {});
db.insert({ planet: "venus", material: "solid" }, (err, newDocs) => {});
db.insert({ planet: "jupiter", material: "gas" }, (err, newDocs) => {});

// .. potentially other code

// Getting **all of the data** currently saved in the DB;
// We do that by passing an empty object as the query.
let query = {};
db.find(query, (err, results) => {
  console.log("results: ", results);
  // This will return all objects in the database
});

let marsQuery = { planet: "mars" };
db.find(marsQuery, (err, results) => {
  console.log("results: ", results);
  // This will return one object, the { planet: 'mars', material: 'solid' } one.
});

let solidQuery = { material: "solid" };
db.find(solidQuery, (err, results) => {
  console.log("results: ", results);
  // This will return three objects, ones which have. thesolid material attribute.
});

db.findOne(solidQuery, (err, result) => {
  console.log("result: ", result);
  // This will return **one** single object, arbitrary one among the solid material ones.
});
```

tldr; we are storing our data in an external file, instead of an array like we did in the last demo. If we restarted our server with an array, our data would be wiped. Because we are storing it in a database, our data will persist.

Likely, this will be more useful for those working on making their own API.

## Introduction to Templates

Last week, we talked about the 4 different ways to respond to a client request:

- `response.send()` → send one line of html
- `response.redirect()` → redirect to a different route
- `response.sendFile()` → redirect to a different page
- `response.json()` → send JSON data

At the end of the day, this means we still need to write HTML and may need to copy data (such as stylesheets or nav bars).

Fortunately, templating systems provide a solution to this problem: they extend the HTML syntax with a few other custom tags & keywords (each templating system has its own flavor) which allow us to easily inject data stored on the server into an HTML file.

Let’s look at a generic example. If I was to build my own templating system, I could choose to use the `[` and `]` characters as a signifier for data that needs to be introduced by the server into the HTML file.

```html
<html>
  <head> </head>
  <body>
    <h1> This is a fictional template </h1>

    <h2> With a dynamic variable that has the value: **[myVariable]** </h2>
  </body>
</html>
```

and our server logic might follow something like this pseudo-code

```js
app.get('/page', function(request, response) {
	0. Have some data you want to populate the page with
	(e.g. var myVariable = "Test")
	1. Read the `page.html` file (the one from above)
	2. Look for any instances of **[myVariable]** in the file contents
	3. Replace them with the value of **myVariable**, which in our case is "Test"
	4. use response.send() to send a real HTML file to the browser.
})
```

After all this processing, the server would send back an actual HTML file, which replaces `[myVariable]` with the word `Test`.

```html
<html>
  <head> </head>
  <body>
    <h1> This is a fictional template </h1>
    <h2> With a dynamic variable that has the value: Test </h2>
  </body>
</html>
```

The key takeaway from this example is the fact that the web browser has no awareness of our templating syntax, so the server does all the work in converting a template into a working HTML file, with all the data correctly populated.

### Enter Nunjucks

Fortunately for us, there are a [plethora templating systems](https://github.com/expressjs/express/wiki?_ga=1.148202167.14603651.1486561881#template-engines), so we don’t have to build our own. Many of them are cross-platform (`moustache`) and/or inspired by other platforms (`jade` ). These unfortunately are either complex to setup or require that you learn another language for authoring HTML.

We have already looked a _little_ bit at [Nunjucks](https://mozilla.github.io/nunjucks/)

Let's start a new project and look at how we can start incorporating Nunjucks.

1. In your class-demos folder, create `week5`
2. Open this folder in VS Code
3. Initialize the project as a node project
4. `npm install express nunjucks`

Now we create and modify our `server.js` file:

```js
const express = require("express");
/************
 * import our templating library
 ************/
const nunjucks = require("nunjucks");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool
 ************/
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");
```

What Nunjucks looks for is a folder called `views/` that will store all our layout data. Just like our `public/` folder, we need to create it. It doesn't matter what these folders are named, as long as they are consistent between the code and the folder in your structure. For example, our blog actually calls this folder `layouts/`.

```
web-design-projects/
├── class-demos/
│   ├── class1/
│   ├── class2/
│   ├── class3/
│   ├── class4/
│   ├── class5/
│   │   ├── server.js
│   │   ├── public/
│   │   ├── views/
```

The difference between `public/` and `views/` is that `public/` will now hold _only_ our assets, css, and front-end javascript. We are no longer going to be writing basic `.html` files, but instead creating _templates_.

Inside `views/`, let's create our first template called `baseLayout.njk`:

```njk
<html>
    <head>
    </head>
    <body>
        <h1> my first template </h1>
        {{ serverData }}
    </body>
</html>
```

This is super similar to regular html, but with the `{{ }}` syntax. These are variables that are populated via our server. So let's send the data from the server with a GET request. Instead of using our previous methods (`send()`, `sendFile()`, `redirect()`, or `json()`), we now use `response.render()`

What `response.render()` does is it uses our `view engine` to render it into HTML. It takes in 2 parameters:

`response.render('name-of-template-file.njk', {})`

The second parameter is an object, to which we set the value of the variables that are displayed on the client-side. So if we wanted to populate `serverData`

```js
app.get("/template-test", (request, response) => {
  response.render("baseLayout.njk", {
    serverData: "i sent this from my server!",
  });
});
```

| Feature           | Nunjucks Syntax              |
| ----------------- | ---------------------------- |
| Output (Escaped)  | `{{ user.name }}`            |
| Output (Raw HTML) | `{{ user.bio \| safe }}`     |
| If-Statement      | `{% if user %}`              |
| End If-Statement  | `{% else %} ... {% endif %}` |
| For Loop          | `{% for item in items %}`    |
| End Loop          | `{% endfor %}`               |
| Include           | `{% include "header.njk" %}` |
| Comments          | `{# comment #}`              |

What templates effectively let us do is _skip making internal `fetch()` requests to our own servers_. If we have data we just want to display, we can use templates to do that for us.
