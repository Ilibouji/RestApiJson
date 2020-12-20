import express from 'express';

import { getAll, getSubscriber, postSubscriber, deleteSubscriber, subtobrodSubscriber } from '../controllers/subscribersController.js';

const router = express.Router();

//readall
router.get('/', getAll);

//getbyid
router.get('/:id', getSubscriber);

//create
router.post('/post', postSubscriber);

//subscribe to broadcast
router.post('/subtobrod', subtobrodSubscriber);

//delete
router.delete('/:id', deleteSubscriber);


export default router;