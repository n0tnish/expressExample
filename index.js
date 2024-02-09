//console.log("welcome to Express JS")
import express from 'express'

//Create an express app 
const app = express ( )
const port = +process.env.PORT || 4000
// Router
app.get('/', (req, res)=>{
    res.status(200).json({
            msg: 'You\'re home'
    })
})
app.all('*', (req, res)=>{
    res.json({
            status: 404,
            msg: '404 Page'
    })
})


app.listen(port)




















































































// 
/*
HTTP METHODS
-   GET 
- POST
- PUT 
- PATCH
- DELETE
 */