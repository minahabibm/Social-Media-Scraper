var data = require('./db.js');
var parse = require('./parser.js');
var twitter= require('./twitter.js');

let getDataFromDb = data.Connection().catch(console.error);
let DataFromDb = [];

let parser = parse.getGroupWords;

let tweets = twitter.getTweets;

var cach = [];
var keyWords = []
var dict = {}

getDataFromDb.then(function(){
    // access results here by chaining to the returned promise
    DataFromDb = data.arra;
    console.log(DataFromDb.length);
    for (let i = 0 ; i < DataFromDb.length; i++){
        let brand = DataFromDb[i]['brand'];
        let name = DataFromDb[i]['name'];
        let group = parser(name,brand);

        let positiveTopics = DataFromDb[i]['positive'];
        for (let q = 0 ; q < positiveTopics.length; q++){
            var test = brand + group + positiveTopics[q];
            if(!cach.includes(test)){
                dict = {
                    name: name,
                    brandName: brand,
                    groupMemebr: group,
                    topicItem: positiveTopics[q]
                }
                cach.push(test);
                keyWords.push(dict);
            }
        }
        let negativeTopics = DataFromDb[i]['negative'];
        for (let q = 0 ; q < negativeTopics.length; q++){
            var test = brand + group + negativeTopics[q];
            if(!cach.includes(test)){
                dict = {
                    name: name,
                    brandName: brand,
                    groupMemebr: group,
                    topicItem: positiveTopics[q]
                }
                cach.push(test);
                keyWords.push(dict);
            }
        }

    }
    
}).then(function(){
    //Search twitter Api and update Database
    console.log(keyWords.length);
    for(let i=0; i < keyWords.length; i++){
        apiAndUpdate(i)
    }
})

function apiAndUpdate(i,) {
    setTimeout(() => {
        tweets(keyWords[i]["brandName"],keyWords[i]["groupMemebr"], keyWords[i]["topicItem"],keyWords[i]["name"]);
      }, 2000 * i)
}