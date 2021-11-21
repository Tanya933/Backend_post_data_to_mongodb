const express = require("express")
const app = express()
const mongoose = require("mongoose")
const schema = require('./schema')
const url = "mongodb+srv://TanyaRajpal:idontcare123@cluster0.oa16o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>console.log("Connected to DB"))
app.use(express.json())

app.post('/add-new-post', async (req,res)=>{
    const myName = req.body.Name;
    const myRegNo = req.body.RegNo;
    const myMarks = req.body.Marks;
  //  console.log("tanya");
    //console.log(myName);
    try{
        const newData = new schema(
            {
                Name: myName,
                RegNo: myRegNo,
                Marks: myMarks
            }
        )
        
        const saveData = await newData.save()
       // console.log(newData);
    }catch(err){
        console.log(err);
        res.json(err);
    }
})

app.use("/",(req,res)=>{
    res.send("Server is Working")
})

app.listen(3000,()=>{
    console.log("Express is Working");
})
