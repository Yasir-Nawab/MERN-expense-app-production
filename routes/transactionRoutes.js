const express = require('express');
const {getAllTransaction, addTransaction, editTransaction, deleteTransaction} = require('../controllers/transactionController');
const router = express.Router();


// add transaction
router.post('/add-transaction',addTransaction);
// adit transaction
router.post('/edit-transaction',editTransaction);
// delete transaction
router.post('/delete-transaction',deleteTransaction);
//get all transactions
router.post('/get-transaction',getAllTransaction);


module.exports = router;