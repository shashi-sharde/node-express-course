const express = require('express')

const app = express()

app.get('/hello',(req,res)=>{
    res.send("Server started at 3000")
})

const port =3000

app.listen(port,`This app is started on port ${port}....`)



