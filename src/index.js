const express = require('express')
const app = express()
const port = 8080

const onePageArticleCount = 10

const {newsArticleModel}=require("./connector");
// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/newFeeds",(req,res)=>{
    
    let limit=(req.query.limit);
    let offset=(req.query.offset);

    if(isNaN(limit)||!limit){
        limit=onePageArticleCount;
    }
    if(isNaN(offset)||!offset){
        offset=0;
    }


    newsArticleModel.find()
                    .limit(parseInt(limit))
                    .skip(parseInt(offset))
                    .then(result=>res.send(result));
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
