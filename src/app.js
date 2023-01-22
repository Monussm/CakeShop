const express=require('express')
const app=express()
const hbs=require('hbs')
const path=require('path')
const mypath=path.join(__dirname,"../public")
const partialpath=path.join(__dirname,"../partials")
app.use(express.static(mypath))
app.set('view engine',"hbs");
hbs.registerPartials(partialpath)

app.get("/",(req,res)=>{

res.render('index')

})
app.listen(3000)