const express = require('express')
const app = express()
const PORT = 8001

app.get('/miracle', function(req, res){
    res.send('We made it!')
})
app.post('/miracle/', function(req,res){
    res.send('posted!')
})
app.get('/miracle/', function(req,res){
    res.send('postedAgain!')
})
app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}`)
})

