const express = require('express')
const app = express()
const port = 8080

const onePageArticleCount = 10

const {newsArticleModel}=require("./connector");
// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/newsFeed",(req,res)=>{
    let limit=parseInt(req.body.limit);
    let offset=parseInt(req.body.offset);

    if(isNaN(limit)||isNaN(offset)){
        limit=onePageArticleCount;
        offset=0;
    }

    newsArticleModel.find().limit(limit).skip(offset).then(result=>res.send(result));
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
