const  mongoose = require ("mongoose")
const Recipient = require("./Recipient")
const Token = require("./Token")
const Description = require("./Description")
const Classification = require("./Classification")
const User = require("./User")


const recipientDataSchema = new mongoose.Schema({
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },

    transactionName: {
        type:String
    },
     transactionDescription: {
        type:String
    },

    recipient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Recipient
    },
    name: {
        type:String
    },
    token:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Token
    },
    description:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Description
    },
    classification:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Classification
    },
    verified: {
        type: Boolean,
        default: false, 
      }
    
},
{
    timestamps: true
}
)
module.exports = mongoose.model('RecipientData', recipientDataSchema)