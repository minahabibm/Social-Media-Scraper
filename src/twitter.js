var twit = require('twit');
var config = require('./config.js');
var T = twit(config)
var data = require('./db.js');
let getDataFromDb = data.ConnectionToUpdate;
var arra = [];
var counter = 0;


async function getTweets(searchKeyWord1 ,searchKeyWord2, searchKeyWord3, searchKeyWord4){
    var searchUrl = encodeURI(`${searchKeyWord1} OR ${searchKeyWord2} OR ${searchKeyWord3}`);
    await T.get('search/tweets', { q: searchUrl , count: config.number_results }, function(err, data, response) {
        //console.log(response);
        if (err) throw err;
        counter ++;
        var tweetsRes = data["statuses"];
        if (tweetsRes.length > 0) {
            tweetsRes.forEach((tweet, i) => {
                if (!arra.includes(tweet["text"])){
                    arra.push(tweet["text"]);
                    getDataFromDb (searchKeyWord4,searchKeyWord1,tweet["text"]);
                    console.log(`Document Number ${counter}`);
                }else{
                    console.log(`Yay & Document Number ${counter}`);
                }
            });
        } else {
            console.log(`No Documents Found for ${searchUrl} & Document Number ${counter}`);
        }
    
      })
}

//getTweets('Enfamil','Neuropro Baby','enough milk');

module.exports = {
    getTweets,
    arra
}