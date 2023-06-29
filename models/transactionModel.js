const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userid:{
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    type:{
      type:String,
      required:true
    },
    catagory: {
      type: String,
      required: true,
    },
    refrence: {
      type: String,
    },
    discription: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const transactionModel = mongoose.model("transaction", transactionSchema);
module.exports = transactionModel;
