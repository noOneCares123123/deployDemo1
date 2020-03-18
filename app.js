const   express = require("express"),
        port    = process.env.port || 6985,
        app     = express();

app.set("view engine","ejs");

// routes
// /
app.get("/",(req,res)=>{
    res.render("home");
});
// about
app.get("/about",(req,res)=>{
    res.render("about");
});


app.listen(port,()=>{
    console.log('deploy demo app runing on '+port);
});
