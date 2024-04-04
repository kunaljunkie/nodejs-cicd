const express = require('express')
const port = process.env.PORT || 8080 
const app = express()

app.get('/',(req,res)=>{
    console.log(req)
    res.status(200).json({status:200,message:"nothing to show this side: author: 'kunal kumawat'"})
})

app.listen(port,()=>{
    console.log(`App running on port ${port  }`)
})