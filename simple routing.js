

const fs = require('fs');
const http = require('http');

const html = fs.readFileSync('./index.html', "utf8");
//start a server 

const server = http.createServer((request, response) => {
    let path = request.url;
    if (path == '/' || path.toLocaleLowerCase() == '/home') {
        response.end(html.replace('{{%CONTENT%}}',' You are in home page'));
    } else if (path.toLocaleLowerCase() == '/about') {
        response.end(html.replace('{{%CONTENT%}}',' You are in about page'))
    } else if (path.toLocaleLowerCase() == '/contact') {
        response.end(html.replace('{{%CONTENT%}}',' You are in contact page'));
    } else{
        response.end(html.replace('{{%CONTENT%}}','404 error: Page Not Found'))
    }

})

//start a server 

server.listen(8000, '127.0.0.1', () => {
    console.log("server is listening to the port 8000");
})
