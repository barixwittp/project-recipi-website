var http = require ('http')
var fs = require ('fs')
var url = require ('url')

http.createServer(function (request,response){

    console.log("url: ",request.url);


    var pathname = url.parse(request.url).pathname;

    console.log("request for " + pathname + " Received");

    fs.readFile(pathname.substr(1),function(err, data){

        // used to avoid sub string "/" 
        // path name is /index.html this is relative path
        // here "/" is not needed , no need of absolute path
        // by this the pathname will start from index 1 ie "i" and so on

        // fs = file system

        if(err){
            console.log(err);
            response.writeHead(404,{'Content-Type':'text/html'});

            // every browser has a 404 page so need of data
        }else{
            response.writeHead(200)
            response.write(data);

            // data sent
        }
        response.end();
    })

}).listen(8081);

console.log('server running at http://127.0.0.1:8081/index.html')
