var http=require('http');
http.createServer(function(req,res){
    // res.write("Hello");
    // res.end();
    var valid_username="gist";
    var valid_password="gist@123";
    if(valid_username==='gist'&&valid_password==='gist@123'){
        res.write("successfully login")
    }
    else{
        res.write("Invalid credintials")
    }
    res.end();
}).listen(8080)