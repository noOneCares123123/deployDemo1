const   express = require("express"),
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


app.listen(6985,()=>{
    console.log("deploy demo app runing on 6985");
});
