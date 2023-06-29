const transactionModel = require('../models/transactionModel');
const moment = require("moment");

// Get All Transactions
const getAllTransaction = async(req,res) => {
    try {
        // frequency is for selecting last week data, last month data, or last year data, or custom time schedule data.
        const {frequency,selectedDate,type} = req.body;
        const transactions = await transactionModel.find({
            //if statment to check freqency is custom to not
            ...(frequency != 'custom' ? {
                date:{ $gt:moment().subtract(Number(frequency), "day").toDate() }
            } : {
                date:{ $gte:selectedDate[0], $lte:selectedDate[1]}
            }),
            userid:req.body.userid,
            ...(type!=='all' && {type})
        });
        if(!transactions){
            res.status(404).send("No tranctions")
        }
        res.status(200).send(transactions);
    } catch (error) {
        res.status(404).send('Error in fetching transactions')
    }
}

// Adding Transaction
const addTransaction = async(req,res) => { 
    try {
        const newTransaction = await new transactionModel(req.body);
        newTransaction.save();
        res.status(200).send('transaction created');
    } catch (error) {
        console.log(error);
        res.status(500).send('Error in creating new transaction')
    }
}

//Editing Transaction
const editTransaction = async(req,res) => {
    try {
        await transactionModel.findByIdAndUpdate({ _id : req.body.transactionId },req.body.payload);
        res.status(200).send('Edited Successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('error in editing a transaction');
    }
}

//Deleting Transaction
const deleteTransaction = async(req,res) => {
    try {
        await transactionModel.findByIdAndDelete({_id : req.body.transactionId});
        res.status(200).send('Deleted Successfully');
    } catch (error) {
        console.log(error);
        res.status(500).send('error in deleting a transaction');
    }
}

module.exports = {getAllTransaction, addTransaction, editTransaction, deleteTransaction};