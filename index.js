const request = require('request');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const https = require("https");
app.use(express.json());
app.use(express.static('public'));


let tweet = [];

request('https://twitter.com/elonmusk',(err,response,body)=>{
    if(!err && response.statusCode == 200);
    {
        const pick = cheerio.load(body);
        pick('p.TweetTextSize').each((index,item)=>{
            tweet.push({
                tweet : item.children[0].data
            })
        })
    }
})


app.get("/",(req,res)=>{
    res.status(200).send(tweet)
})

app.listen(2200,()=>(console.log(`YOUR API RUNNING :`,2200)))