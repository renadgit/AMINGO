
/*Step 2. Create a schema
username
comment
tags
image
likes
shares
date*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedSchema = new Schema({
    userName:
    {
        type: String,
        require: true
    },
    comment: {
        type: String,
        require: true
    },
    tags: {
        type: String,
        require: true,
    },
    image: {
        type: String,
    },
    likes: {
        type: Number,
        default: 0,
    },
    shares: {
        type: Number,
        default: 0,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
// Step 3. Export the schema as a model
module.exports = Feed = mongoose.model('Feed', FeedSchema);
// Step 4. Import Feed.js into server.js - done
// Step 5. Create a post route for '/feed'
// Step 6. Save the post to the database

