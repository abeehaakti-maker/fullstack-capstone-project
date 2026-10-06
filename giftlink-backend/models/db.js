// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    const client = new MongoClient(url);

    // Connect to MongoDB
    await client.connect();

    // Connect to database giftdb and store it in dbInstance
    dbInstance = client.db(dbName);

    // Return the database instance
    return dbInstance;
}

module.exports = connectToDatabase;
