# Week 3: 2/11/26

## Agenda

1. Project 1 Blog Share
2. Project 2 Introduction
3. Introduction to API

---

## Project 1 Blog Share

In breakout rooms, share your blogs.

Assign someone to notes during each share, and then the person presenting should take notes next. _Every person will share once, every person will take notes once_.

- Talk about your design process
- Talk about your technical research
- Share any questions you had
- If you are able to answer questions of your group mate, do so and make note of it.
- Each person, aside from the notetaker, should provide feedback following the praise/question/polish framework.
  - Praise: What works well for the blog? Does it achieve the intended design goals / intentions.
  - Question: What are you curious about? This could be a design decision or a technical question.
  - Polish: What would you improve? Think beyond your current technical limitations. What would make this blog better?

Collaborative notes doc: https://cryptpad.fr/doc/#/2/doc/edit/3QRCBbRgCX1gNb6VHGow+Ysk/

We will come together as a class and everyone will share their blogs and what their group talked about.

---

## Project 2 Introduction

In a group of 2 or 3, you will be creating your own API.

This has two approaches (pick 1):

1. Curating and scraping data into a new dataset (in JSON format)
2. Use an existing API for it's non-intended purpose
   - Places to look for existing APIs: [APIlist.fun](https://apilist.fun/) | [Public APIs](https://github.com/public-apis/public-apis)

Take a moment to think about which approach you are leaning more towards now. I will write down who is interested in which, and by next week you will send me your top 3 choices of group mates based on which option you choose. If you already have a group in mind, please let me know.

This has 2 technical requirements:

1. You must create a back-end server that will send the data to the client
2. You must have a front-end client that will present that data in some way

Next week you will get your group assignments, but start thinking about what data you want to curate or manipulate. You also have a reading assignment due, posted to your blogs. The following week will be your project 2 concept pitches, where you will detail what approach you will use.

---

## Introduction to APIs

Today, we will focus on the front-end of APIs to make changes to our HTML pages using JavaScript. Next week we will set up our servers on DigitalOcean and use the back-end.

Application Programming Interfaces (API) are ways for us to connect to other servers that send data on the web.

We already know now that the internet is made up of clients and servers. So far, we have covered client-side programming using HTML/CSS and client-side interactions with JavaScript. We can also access data from another server by using APIs.

When we request information from a server, it can be broken down into one of 8 different types of requests. We will pretty much only work with 4:

| Request  | Info                                                   | Example                    |
| -------- | ------------------------------------------------------ | -------------------------- |
| `GET`    | retrieving information, usually a webpage or file      | visiting a webpage via url |
| `POST`   | sending information, usually via a form                | creating an account        |
| `PUT`    | updating information on the server, usually via a form | updating a password        |
| `DELETE` | deleting information on the server, usually via a form | deleting an account        |

See WizardZines for an explanation on all the requests:

- [Part 1](https://wizardzines.com/comics/request-methods-1/)
- [Part 2](https://wizardzines.com/comics/request-methods-2/)

Specifically, a lot of servers use Representational State Transfer (REST) as the core schematic for constructing a request.

Something else we will continuously look at are `asynchronous functions`.
[Asynchronous](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing) allows us to simultaneously run different lines of code, as opposed to running them sequentially. This is because making a request to another server will take a little longer than rendering something on our own webpage. But, if we want to modify our own data on our client we need to be able to wait for the request to complete.

### Deconstructing a GET request

When we make a GET request inside the browser, it comes via the URL. For example, if the URL you are requesting is:

```
http://www.omdbapi.com/??apikey=keykeyKeyKey&s="one%20battle%20after%20another"
```

Everything that comes after the `?` (query) is a request parameter. So, we need to build our code to look like this url.

### Using `fetch()`, `async` and `await`

- [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) allows us to make a request to a URL with javascript
- [`async`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) goes in the function header to declare a function as `asynchronous`, or enabling multiple actions at once
- [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) tells the asynchronous function to wait for a specific response before continuing

Let's work with the OMDB api: https://www.omdbapi.com/

1. Create an API key (it should look something like `abc123fed`)
2. We want to reconstruct the URL parameters with the code. This means `?apikey=keykeyKeyKey&s="one%20battle%20after%20another"`. We can use the JavaScript object `URLSearchParams`

```js
let params = new URLSearchParams({
  apikey: "your-key-here",
  s: "one battle after another",
  type: "movie",
});
```

3. Reconstruct the URL using this object

```js
let url = "https://www.omdbapi.com/?" + params;
```

4. Fetch the url

```js
let response = await fetch(url);
```

It is also useful to print out the response here to see how the data is structured.

5. Convert the response to `json` notation

```js
let jsonData = await response.json().then(//do successful action, // do error action)
```

6. We need to write these handler functions, and we could do that as an external function or anonymous functions embedded in the parameter.

### Related Coding Train Videos

- [`fetch()`](https://thecodingtrain.com/tracks/data-and-apis-in-javascript/data/1-client-side/1-fetch)
- [`async`/`await` 1](https://thecodingtrain.com/tracks/topics-in-native-javascript/js/async-await-part-1)
- [`async`/`await` 2](https://thecodingtrain.com/tracks/topics-in-native-javascript/js/async-await-part-2)
