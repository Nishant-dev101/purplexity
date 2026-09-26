import express from 'express'

const app = express();

app.get('/', (req,res)=> {
      return res.json("hello")
})

app.listen(5000,()=>{
      console.log("server running on 5000")
})