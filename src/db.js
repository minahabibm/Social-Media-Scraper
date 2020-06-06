var MongoClient = require('mongodb').MongoClient;
var arra = [];

/**Connect to the Database*/
async function TestConnection(){
    const url = 'mongodb://localhost:27017';
    const urlMongo = 'mongodb://root:password@db:27017/';
    const client = new MongoClient(urlMongo,{useNewUrlParser: true, useUnifiedTopology: true});
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await listDatabases(client);
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

/**Connect to the Database*/
async function Connection(){
    const url = 'mongodb://localhost:27017';
    const urlMongo = 'mongodb://root:password@db:27017/';
    const client = new MongoClient(urlMongo,{useNewUrlParser: true, useUnifiedTopology: true});
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await findAllDocuments(client,arra);
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function ConnectionToUpdate(a, b, c){
    const url = 'mongodb://localhost:27017';
    const urlMongo = 'mongodb://root:password@db:27017/';
    const client = new MongoClient(urlMongo,{useNewUrlParser: true, useUnifiedTopology: true});
    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await updateDocumentsByid(client, a , b, c);
        
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

/**List All Databases*/
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

/**List All Collections*/
async function listCollections(client){
    collectionList = await client.db('nutrition').listCollections();
    console.log("Collections:");
    collectionList.forEach(col => console.log(` - ${col.name}`));
};

/**List a Document */
async function findOneListingByName(client, nameOfListing) {
    result = await client.db("nutrition").collection("products").findOne();

    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}

/**List all Documents */
async function findAllDocuments(client,arra) {
    cursor = await client.db("nutrition").collection("products").find({});
    const results = await cursor.toArray();
    if (results.length > 0) {
        results.forEach((result, i) => {        
            if (result.name && result.brand && result.topics){
                var dict = {
                    "brand": result.brand,
                    "name" : result.name,
                    "positive" : result.topics.positives,
                    "negative" : result.topics.negatives
                };
                arra.push(dict);
            }
        });
    } else {
        console.log("No Documents Found ");
    }
}

async function updateDocumentsByid(client, idNum, brandName , updateDocum) {
    result = await client.db("nutrition").collection("products").updateOne({ name: idNum, brand: brandName},{$set :{"socialMedia": []}});

    //console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    //console.log(`${result.modifiedCount} document(s) was/were updated.`);
    
    result = await client.db("nutrition").collection("products").updateOne({ name: idNum, brand: brandName} , { $push: {"socialMedia" : updateDocum }});

    //console.log(`${result.matchedCount} document(s) matched the query criteria.`);
    //console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

//TestConnection().catch(console.error);
//Connection().catch(console.error);
//ConnectionToUpdate( "5e7a89e0684a170724f99ae8" , {"socialMedia": {}} );

module.exports = {
    Connection,
    ConnectionToUpdate,
    arra
}
