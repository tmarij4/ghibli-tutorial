// Create a request variable and assign a new XMLHttpRequest object to it.
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = () => {
  let data = JSON.parse(this.response);
  data.forEach(data => console.log(data.title));
};

// Send request
request.send();

//Create new html elements
const app = document.getElementId('root');
const logo = document.createElement('img');
logo.src = 'logo.png';
const container = document.createElement('div');
container.setAttribute('class', 'container');

//Add elements to website
app.appendChild(logo);
app.appendChild(container);
