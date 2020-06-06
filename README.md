# Social Media Scraper

This a social media scraper, completed for Topcoder challenge, used to extract tweets from twitter API for specific brand name with description and feedback.

The CLI tool will start by creating a mongo databse, connect, and restore to it from backup file. Then extract the brand names with feedbacks and descriptions. contruct a GET request to the twitter API, and save the responses to a new document with a name social media to that specific brand and add the tweets. 

## Technology Stack
* NodeJS
* Mongo
* Twitter API

## Initial Setup
* Clone the repository.
* Download the Database Backup file [here](https://drive.google.com/file/d/1QpGvgFqjzxJzTFsyBZq8Px-Beyeenqxq/view?usp=sharing)
* `mkdir Resources`
* The .zip file should be in the Resources Folder
    
### Build and install
Make sure you have node, npm, mongodb, mongodb tools, Twitter API developer account.

* make sure mongodb is running.
* make sure your Twitter api keys in the config.js
* extract the .zip folder contents in Resources folder
* npm i
* npm start

### Build using Docker (Recommended)
* docker-compose up
