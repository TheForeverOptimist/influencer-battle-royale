require('../config/connection');

const mongoose = require('mongoose');

const influencerSchema = new mongoose.Schema(
{
        name:String ,
        category:String,
        followerCount:String,
        networth:String
})
const Influencer = mongoose.model('influencerCollection', influencerSchema);

module.exports = Influencer