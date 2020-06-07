# Social Media Scraper

This is a social media scraper; a completed Topcoder challenge. Used to extract tweets from Twitter API with a specific brand name, description and feedback.

The CLI tool will begin by creating a Mongo database, to connect and restore data from backup file. Next, extract the brand names, feedbacks and descriptions from restored data. Contruct a GET request to the Twitter API. Then, save the responses to a new document with the name "socialMedia" to that specific brand and add the tweets. 

## Technology Stack
* Node.JS
* Mongo
* Twitter API

## Initial Setup
* Clone the repository.
* Download the Database Backup file [here](https://drive.google.com/file/d/1QpGvgFqjzxJzTFsyBZq8Px-Beyeenqxq/view?usp=sharing)
* `mkdir Resources`
* The .zip file should be in the Resources Folder
    
### Build and install
Ensure you have: Node.JS, npm, Mongodb, Mongodb tools, Twitter API developer account.

* Confirm Mongodb is running.
* Make sure your Twitter API keys are in the config.js
* Extract the .zip folder contents in Resources folder
* `npm i`
* `npm start`

### Build using Docker (Recommended)
* Make sure your Twitter API keys are in the config.js
* `docker-compose up`
