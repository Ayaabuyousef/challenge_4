const express=require('express')
const app=express()
app.use('/',express.static("./client/dist"))
const port=8888

app.listen(port,()=>{
    console.log('listeninng on port ${port}....')
})v