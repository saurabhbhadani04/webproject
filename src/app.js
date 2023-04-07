const express = require("express")
const path = require("path");
const app = express();
const port =   3000;
// const port =  process.env.PORT || 3000;

// public static path 
const static_path = path.join(__dirname,"../public");





// app.set("views","./templates/views")
app.set('view engine','hbs');
app.set("views","./views")

app.use(express.static(static_path));

// routing
app.get("",(req,res)=>{
    res.render("index")
});
app.get("/about",(req,res)=>{
    res.render("about")
});
app.get("/Wheather",(req,res)=>{
    res.render("weather")
});
app.get("*",(req,res)=>{

    res.render("404error",{
        errorMsg:"Opps! Page Not Found"
    })
});


app.listen(port,()=>{
console.log(`listening to the Port at ${port}`)
});