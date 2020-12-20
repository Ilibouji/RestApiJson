import express from 'express';

import { deleteBroadcast, getAll, getBroadcast, postBroadcast } from '../controllers/broadcastsController.js';


const router = express.Router();

//readall
router.get('/', getAll);

//getbyid
router.get('/:id', getBroadcast);

//create
router.post('/post', postBroadcast);

//delete
router.delete('/:id', deleteBroadcast);



export default router;